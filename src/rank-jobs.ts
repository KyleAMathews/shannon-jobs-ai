import pg from "pg"
const { Client } = pg
import { OpenAI } from "openai"
import { ZodFunctionDef, toTool, parseArguments } from "openai-zod-functions"
import { z } from "zod"
import { initLogger, traced, wrapOpenAI, Eval } from "braintrust"

function updateQueryString(url, queryParams) {
  const urlObj = new URL(url)
  const searchParams = new URLSearchParams(urlObj.search)

  // Add or replace query parameters
  for (const [key, value] of Object.entries(queryParams)) {
    if (searchParams.has(key)) {
      searchParams.set(key, value)
    } else {
      searchParams.append(key, value)
    }
  }

  // Update the search property of the URL object
  urlObj.search = searchParams.toString()

  // Return the modified URL string
  return urlObj.toString()
}

const jobDetailsUrl = `https://serpapi.com/search.json?engine=google_jobs_listing&q=eyJqb2JfdGl0bGUiOiJTZW5pb3IgUHJvZHVjdCBEZXNpZ25lciIsImh0aWRvY2lkIjoiTEJJYkxKeE1aYi0wLXJHVEFBQUFBQT09IiwidXVsZSI6IncrQ0FJUUlDSU5WVzVwZEdWa0lGTjBZWFJsY3ciLCJnbCI6InVzIiwiaGwiOiJlbiIsImZjIjoiRW93Q0Nzd0JRVTUxVjJoamJXRTVkRlZmZDBodVdWbHpPVFpQZDJSRE1VaFlhWFJQT1VWR2QzRnhiMGgzVkRSM1FtczBURWhKTjJreE56aHpjSFJTWjA4d1JsRkNkVVkxTkRaT2RuUlJTMjFQV0hoUGJrcHpjek0zVVZCa2JWWnVaMFJFWTA0eGJVUlBMVGwwY1dwblVXazJaSGw2YjNwVGJEUTJXbUV5VG1aTFduVktOSEJUTlhGd2RFcERkV2czWkZsb05VRlRTMjl1VUZwMVVrZFNOR3RpWkdaM2RFNVNUMXBXYld4aWJuVXpTR2sxWTBscVgzUmxVMnBaV0VJMWQzZE1TUzFPTTNwVUxYa3dWbEl6Vm1WVkVoZEJjMVExV21WUGVrRjJkVmwzWW10UWFFOXRUakpCVFJvaVFWQllhRzAxWW5GTFYxaGpjWE5ZTjFKUFJYQjZjVVZpY0daZk5uTTVVVmxSZHciLCJmY3YiOiIzIiwiZmNfaWQiOiJmY183IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIExpbmtlZEluIiwibGluayI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9qb2JzL3ZpZXcvc2VuaW9yLXByb2R1Y3QtZGVzaWduZXItYXQtc3RlZGktMzg2MjkyMjIzOT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19&api_key=ef4c686ab57e1e8295369395068e4d1f2389e6a1a95b4a644fd6bc4abdd77c0d`

async function getDetailedJobInfo(client: any, job_id: string) {
  const url = updateQueryString(jobDetailsUrl, { q: job_id })
  const res = await fetch(url)
  const data = await res.json()

  const updateQuery = `UPDATE jobs set google_jobs_listing_url = $1, apply_options = $2 WHERE job_id = $3`
  await client.query(updateQuery, [
    data.search_metadata.google_jobs_listing_url,
    JSON.stringify(data.apply_options),
    job_id,
  ])
}

const connectionString = true
  ? `postgresql://postgres:pg_password@localhost:5432/shannon-job-finder`
  : ``

export const openai = new OpenAI({
  apiKey: process.env[`OPENAI_KEY`],
})

const functions: ZodFunctionDef[] = [
  {
    name: `evaluate_job_posting`,
    description: `Evaluate the job posting for Shannon`,
    schema: z.object({
      would_shannon_like_this_job: z
        .boolean()
        .describe(
          `Your best guess for whether Shannon would like this job. If it's not clear, return true`
        ),
      job_description: z
        .string()
        .describe(
          `briefly summarize this job and how it does or doesn't meet Shannon's needs`
        ),
      pros: z
        .array(z.string())
        .describe(`reasons why you think Shannon will like this job.`),
      cons: z
        .array(z.string())
        .describe(`reasons why you think Shannon will not like this job.`),
    }),
  },
]

async function evalJob(jobData) {
  const chat = await openai.chat.completions.create({
    model: `gpt-4-1106-preview`,
    // model: `gpt-3.5-turbo-0125`,
    temperature: 0,
    messages: [
      {
        role: `system`,
        content: `You are an AI agent that evaluates jobs for Shannon Soper, a Senior Product Designer. She is enthusiastically looking for a new job and needs your help to evaluate potential jobs to see if they're a good fit.

            She's looking for a remote job with the following qualities:
              - pays well ($140k+). If the maximum salary is below this, then she for sure won't want the job.
              - isn't focused on marketing or graphic design
              - She has a lot of experience with devtools, e-learning, clis, open source, tutorials, onboarding, growth, etc. so jobs in these areas are good matches.
              - She enjoys industries around education, developer tools, writing, environmentalism, and science.
              - She is NOT interested in industries around esports and betting.
              - overly fast paced "hustle", work to bone, etc. jobs are not her style. She wants a challenging work environment but prefers a more balanced lifestyle.
              - isn't a job mainly around managing the company's design systems — she likes deeply understanding users and designing features that solve their problems. USING a design system however is a great sign as she wants to design screens with a well-built design system.
              - is not a contract or freelance job (only full-time jobs w/ benefits)
              - the company is neither a new startup (no "founding designer" jobs) nor a very large public company — growth stage startups is a good fit where there's lots of urgent problems but the business model and team structure are now established.

            Look at the following job and evaluate it for her. Thanks!
`,
      },
      {
        role: `user`,
        content: JSON.stringify(jobData),
      },
    ],
    tools: functions.map(toTool),
  })

  const choice = chat.choices[0]

  const finish_reason = choice.finish_reason

  if (finish_reason === `tool_calls`) {
    if (!choice?.message?.tool_calls) {
      return {
        response: `there was an error processing your request, please try again later.`,
        links: [],
      }
    }
    const toolInfo = choice?.message?.tool_calls[0]
    const toolRes = JSON.parse(toolInfo?.function?.arguments)
    const parsedData = functions[0].schema.parse(toolRes)
    return parsedData
  }
}

export async function rankJobs() {
  let client

  try {
    client = new Client({ connectionString })
    await client.connect()
  } catch (e) {
    console.log(e)
  }

  // Get jobs that haven't been ranked.
  const query = `SELECT job_id, title, company_name, location, description, job_highlights, related_links, detected_extensions from jobs WHERE would_shannon_like_this_job IS NULL limit 40;`

  const { rows } = await client.query(query)
  for (const job of rows) {
    const { job_id, ...jobIdLessData } = job
    console.log(`evaluating`, job.title, job.company_name)
    const result = await evalJob(jobIdLessData)
    // console.log(result)

    const updateQuery = `UPDATE jobs set would_shannon_like_this_job = $1, pros = $2, cons = $3, job_summary = $4 WHERE job_id = $5`
    await client.query(updateQuery, [
      result.would_shannon_like_this_job,
      JSON.stringify(result.pros),
      JSON.stringify(result.cons),
      result.job_description,
      job_id,
    ])

    if (result.would_shannon_like_this_job) {
      await getDetailedJobInfo(client, job_id)
    }
  }

  process.exit()
}

async function tempUpdateJobsDetailed() {
  let client

  try {
    client = new Client({ connectionString })
    await client.connect()
  } catch (e) {
    console.log(e)
  }

  const { rows } = await client.query(
    `select job_id from jobs where would_shannon_like_this_job = true`
  )

  for (const job of rows) {
    await getDetailedJobInfo(client, job.job_id)
  }
}

// tempUpdateJobsDetailed()
rankJobs()
