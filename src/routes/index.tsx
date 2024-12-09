import { useEffect } from "react"
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
  }

  const verticalLineStyle = {
    width: `1px`,
    backgroundColor: `#000`, // Color of the vertical line
    margin: `0 16px`,
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
  useEffect(() => {
    async function main() {
      const shape = await db.read_jobs.sync()
      const synced = await shape.synced
      console.log({ shape, synced })
    }
    main()
  }, [])
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
  const toEvaluate = jobs.filter((job) => !readJobs.has(job.job_id))

  return (
    <Flex direction="column" gap="5">
      <Heading>Jobs I Might Like</Heading>
      <Text as="p">{toEvaluate.length} to evaluate</Text>
      {toEvaluate.map((job) => {
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
                  <Button
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
                  </Button>
                  <Button
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
                  </Button>
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
    </Flex>
  )
}
