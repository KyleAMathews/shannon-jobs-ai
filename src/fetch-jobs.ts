import pg from "pg"
const { Client } = pg

const connectionString = true
  ? `postgresql://postgres:pg_password@localhost:5432/shannon-job-finder`
  : ``

// Function to insert a job into the table
async function insertJob(client, job) {
  try {
    // Insert the job into the table
    const query = `
      INSERT INTO jobs (
        job_id,
        title,
        company_name,
        location,
        via,
        description,
        job_highlights,
        related_links,
        thumbnail,
        extensions,
        detected_extensions,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      ON CONFLICT (job_id) DO NOTHING;
    `

    const values = [
      job.job_id,
      job.title,
      job.company_name,
      job.location,
      job.via,
      job.description,
      JSON.stringify(job.job_highlights),
      JSON.stringify(job.related_links),
      job.thumbnail,
      JSON.stringify(job.extensions),
      JSON.stringify(job.detected_extensions),
      new Date(),
    ]

    await client.query(query, values)

    console.log(`Job inserted successfully.`)
  } catch (error) {
    console.error(`Error inserting job:`, error)
  }
}

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

const baseUrl = new URL(
  `https://serpapi.com/search.json?engine=google_jobs&q=senior+product+designer&location=United+States&google_domain=google.com&gl=us&hl=en&start=0&chips=date_posted%3Aweek&ltype=1&api_key=ef4c686ab57e1e8295369395068e4d1f2389e6a1a95b4a644fd6bc4abdd77c0d`
)

export async function fetchJobs({ start = 0 }) {
  let client

  try {
    client = new Client({ connectionString })
    await client.connect()
  } catch (e) {
    console.log(e)
  }

  const res = await fetch(
    updateQueryString(baseUrl, { start, date_posted: `today` })
    // updateQueryString(baseUrl, { start, date_posted: `3days` })
  )
  const data = await res.json()

  for (const job of data.jobs_results) {
    await insertJob(client, job)
  }

  if (data.jobs_results.length === 10) {
    console.log(`fetching more jobs`)
    await fetchJobs({ start: start + 10 })
  }
}

fetchJobs({ start: 0 })
