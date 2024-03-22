import { Container, Flex, Text, Heading, Button } from "@radix-ui/themes"
import { useElectricData } from "electric-query"
import { useLocation, Link } from "react-router-dom"
import { Electric, Jobs, Read_jobs } from "../generated/client"
import { useElectric } from "../context"
import { genUUID } from "electric-sql/util"
import Markdown from "react-markdown"

const SplitColumns = ({ leftComponent, rightComponent }) => {
  const containerStyle = {
    display: `flex`,
    alignItems: `stretch`,
  }

  const columnStyle = {
    flex: 1,
    padding: `0 8px`, // Adjust padding as needed
  }

  const verticalLineStyle = {
    width: `1px`,
    backgroundColor: `#000`, // Color of the vertical line
    margin: `0 8px`, // Adjust margin to control gap between columns
  }

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        {/* Content for left column */}
        {leftComponent}
      </div>
      <div style={verticalLineStyle}></div>
      <div style={columnStyle}>
        {/* Content for right column */}
        {rightComponent}
      </div>
    </div>
  )
}

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

  return (
    <div>
      <h1>Jobs I Might Like</h1>
      <p>{jobs.length - readJobs.size} to evaluate</p>
      {jobs.map((job) => {
        if (readJobs.has(job.job_id)) {
          return
        }
        return (
          <div>
            <SplitColumns
              leftComponent={
                <div>
                  <h3>
                    <a
                      target="_blank"
                      href={`https://www.google.com/search?${new URLSearchParams(`q=${job.title} @ ${job.company_name}`)}`}
                    >
                      {job.title} @ {job.company_name}
                    </a>
                  </h3>
                  <p>
                    <a
                      target="_blank"
                      href={`https://www.linkedin.com/search/results/companies/?keywords=${job.company_name}&origin=SWITCH_SEARCH_VERTICAL&sid=HjO`}
                    >
                      LinkedIn
                    </a>
                  </p>
                  <button
                    style={{ marginRight: 8 }}
                    onClick={() => {
                      console.log(`click`)
                      db.read_jobs.create({
                        data: {
                          id: genUUID(),
                          job_id: job.job_id,
                          created_at: new Date(),
                          why: `applied`,
                        },
                      })
                    }}
                  >
                    Applied
                  </button>
                  <button
                    onClick={() => {
                      console.log(`click`)
                      db.read_jobs.create({
                        data: {
                          id: genUUID(),
                          job_id: job.job_id,
                          created_at: new Date(),
                          why: `rejected`,
                        },
                      })
                    }}
                  >
                    Reject
                  </button>
                  <p>Posted {job.detected_extensions.posted_at}</p>
                  <p>{job.job_summary}</p>
                  <h4>Pros</h4>
                  <ul>{job.pros?.map((pro) => <li>{pro}</li>)}</ul>
                  <h4>Cons</h4>
                  <ul>{job.cons?.map((con) => <li>{con}</li>)}</ul>
                </div>
              }
              rightComponent={
                <div>
                  <Markdown>{job.company_info}</Markdown>
                </div>
              }
            />
            <hr />
          </div>
        )
      })}
    </div>
  )
}
