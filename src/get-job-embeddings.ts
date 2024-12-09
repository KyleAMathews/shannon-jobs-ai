import { ChromaClient } from "chromadb"
import { OpenAIEmbeddingFunction } from "chromadb"
import pg from "pg"
const { Client } = pg

const chromaClient = new ChromaClient({
  path: `http://localhost:8005`,
})

const connectionString = true
  ? `postgresql://postgres:pg_password@localhost:5432/shannon-job-finder`
  : ``

const embedder = new OpenAIEmbeddingFunction({
  openai_api_key: process.env.OPENAI_KEY,
})

async function getJobEmbeddings() {
  const collection = await chromaClient.getCollection({
    name: `jobs`,
    embeddingFunction: embedder,
  })
  let client

  try {
    client = new Client({ connectionString })
    await client.connect()
  } catch (e) {
    console.log(e)
  }

  // Get jobs that haven't been ranked.
  const query = `SELECT job_id, title, company_name, location, description, job_highlights, extensions from jobs limit 300;`

  const { rows } = await client.query(query)
  for (const job of rows) {
    console.log(`getting job embeddings for`, job.title, job.company_name)
    const { job_id, ...otherFields } = job
    await collection.upsert({
      ids: [job_id],
      documents: [JSON.stringify(otherFields)],
    })
    // const results = await collection.query({
    // nResults: 2,
    // queryTexts: [JSON.stringify(job), `foo`],
    // })
    // console.log(results)
    // try {
    // const company_info = await getCompanyInfo(
    // `${job.title} @ ${job.company_name}`
    // )
    // console.log(company_info)

    // const updateQuery = `UPDATE jobs set company_info = $1 WHERE job_id = $2`
    // await client.query(updateQuery, [company_info, job.job_id])
    // } catch (e) {
    // // just ignore — most likely a zod error but oh well for now.
    // console.log(e)
    // }
  }

  process.exit()
}

getJobEmbeddings()
