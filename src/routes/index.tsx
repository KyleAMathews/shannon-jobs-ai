import { Container, Flex, Text, Heading, Button } from "@radix-ui/themes"
import { useElectricData } from "electric-query"
import { useLocation } from "react-router-dom"
import { Electric, Jobs, Read_jobs } from "../generated/client"
import { useElectric } from "../context"
import { genUUID } from "electric-sql/util"

const queries = ({ db }: { db: Electric[`db`] }) => {
  return {
    jobs: db.jobs.liveMany({
      where: {
        would_shannon_like_this_job: true,
      },
      orderBy: { created_at: `desc` },
    }),
    read_jobs: db.read_jobs.liveMany({}),
  }
}

Index.queries = queries

export default function Index() {
  const { db } = useElectric()!
  const location = useLocation()
  const {
    jobs,
    read_jobs,
  }: {
    jobs: Jobs[]
    read_jobs: Read_jobs[]
  } = useElectricData(location.pathname + location.search)

  console.log({ read_jobs })
  const readJobs = new Set()
  read_jobs.forEach((read) => readJobs.add(read.job_id))

  // console.log({ jobs: jobs.filter((j) => j.company_name === `Netflix`) })

  return (
    <div style={{ width: 600, margin: `auto` }}>
      <h1>Jobs Shannon Might Like</h1>
      <p>{jobs.length - readJobs.size} to evaluate</p>
      {jobs.map((job) => {
        if (readJobs.has(job.job_id)) {
          return
        }
        return (
          <div>
            <h3>
              <a
                target="_blank"
                href={`https://www.google.com/search?${new URLSearchParams(`q=${job.title} @ ${job.company_name}`)}`}
              >
                {job.title} @ {job.company_name}
              </a>
            </h3>
            <button
              onClick={() => {
                console.log(`click`)
                db.read_jobs.create({
                  data: {
                    id: genUUID(),
                    job_id: job.job_id,
                    created_at: new Date(),
                  },
                })
              }}
            >
              Mark read
            </button>
            <p>Posted {job.detected_extensions.posted_at}</p>
            <a target="_blank" href={job.google_jobs_listing_url}>
              Google Search Listing
            </a>
            <p>{job.job_summary}</p>
            <h4>Pros</h4>
            <ul>{job.pros?.map((pro) => <li>{pro}</li>)}</ul>
            <h4>Cons</h4>
            <ul>{job.cons?.map((con) => <li>{con}</li>)}</ul>
            <hr />
          </div>
        )
      })}
    </div>
  )
}
