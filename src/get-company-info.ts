import pg from "pg"
const { Client } = pg
import { OpenAI } from "openai"
import { ZodFunctionDef, toTool, parseArguments } from "openai-zod-functions"
import { z } from "zod"

const connectionString = true
  ? `postgresql://postgres:pg_password@localhost:5432/shannon-job-finder`
  : ``

export const openai = new OpenAI({
  apiKey: process.env[`OPENAI_KEY`],
})

async function getCompanyInfo(jobInfo) {
  const chat = await openai.chat.completions.create({
    model: `gpt-4-1106-preview`,
    // model: `gpt-3.5-turbo-0125`,
    temperature: 0,
    messages: [
      {
        role: `system`,
        content: `You are an AI agent that helps evaluates jobs for Shannon Soper, a Senior Product Designer. She is enthusiastically looking for a new job and needs your help to evaluate potential jobs to see if they're a good fit.

            She's looking for a remote senior product designer job with the following qualities:
              - pays well ($140k+). If the maximum salary is below this, then she for sure won't want the job.
              - isn't focused on marketing or graphic design
              - She has a lot of experience with devtools, e-learning, clis, open source, tutorials, onboarding, growth, etc. so jobs in these areas are good matches.
              - She enjoys industries around education, developer tools, writing, environmentalism, and science.
              - She is NOT interested in industries around esports and betting.
              - overly fast paced "hustle", work to bone, etc. jobs are not her style. She wants a challenging work environment but prefers a more balanced lifestyle.
              - isn't a job mainly around managing the company's design systems — she likes deeply understanding users and designing features that solve their problems. USING a design system however is a great sign as she wants to design screens with a well-built design system.
              - is not a contract or freelance job (only full-time jobs w/ benefits)
              - the company is neither a new startup (no "founding designer" jobs) nor a very large public company — growth stage startups is a good fit where there's lots of urgent problems but the business model and team structure are now established.
`,
      },
      {
        role: `user`,
        content: `I'm looking at applying to this job "${jobInfo}" — help me decide if I should join — from their website and other sources around the web, succinctly tell me more about them:

- what problem(s) are they trying to solve and for whom
- when were they founded
- how big is the company in revenue / headcount? If they're not public, say what stage of private company they are e.g. seed, series a, series b, etc.

    Output markdown.
    `,
      },
    ],
    // tools: functions.map(toTool),
  })

  return chat.choices[0].message.content
}

async function getCompanyInfoForJobs() {
  let client

  try {
    client = new Client({ connectionString })
    await client.connect()
  } catch (e) {
    console.log(e)
  }

  // Get jobs that haven't been ranked.
  const query = `SELECT job_id, title, company_name from jobs WHERE would_shannon_like_this_job = true and company_info IS NULL limit 100;`

  const { rows } = await client.query(query)
  for (const job of rows) {
    console.log(`getting company info for`, job.title, job.company_name)
    try {
      const company_info = await getCompanyInfo(
        `${job.title} @ ${job.company_name}`
      )
      console.log(company_info)

      const updateQuery = `UPDATE jobs set company_info = $1 WHERE job_id = $2`
      await client.query(updateQuery, [company_info, job.job_id])
    } catch (e) {
      // just ignore — most likely a zod error but oh well for now.
      console.log(e)
    }
  }

  process.exit()
}
getCompanyInfoForJobs()
