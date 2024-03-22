import { Container, Flex, Text, Heading, Button } from "@radix-ui/themes"
import { useElectricData } from "electric-query"
import { useLocation, Link } from "react-router-dom"
import { Electric, Jobs, Read_jobs } from "../generated/client"
import { useElectric } from "../context"
import Markdown from "react-markdown"

function formatDate(date) {
  // Create a formatter for the date parts
  const dateFormatter = new Intl.DateTimeFormat(`en-US`, {
    month: `2-digit`,
    day: `2-digit`,
    hour: `2-digit`,
    minute: `2-digit`,
    hour12: false,
  })

  // Format the date into parts
  const parts = dateFormatter.formatToParts(date)

  // Initialize an object to hold the parts we need
  const dateParts = {
    month: ``,
    day: ``,
    hour: ``,
    minute: ``,
  }

  // Map the formatted parts into the dateParts object
  parts.forEach((part) => {
    if (part.type in dateParts) {
      dateParts[part.type] = part.value
    }
  })

  // Assemble and return the custom formatted date string
  return `${dateParts.month}/${dateParts.day} ${dateParts.hour}:${dateParts.minute}`
}

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
    read_jobs: db.read_jobs.liveMany({
      where: {
        why: `applied`,
      },
    }),
  }
}

Applied.queries = queries

export default function Applied() {
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
  const appliedJobs = jobs.filter((job) => readJobs.has(job.job_id))
  appliedJobs.sort((a, b) => {
    const aRead = read_jobs.find((r) => r.job_id === a.job_id)
    const bRead = read_jobs.find((r) => r.job_id === b.job_id)
    return bRead.created_at - aRead.created_at
  })

  return (
    <div>
      <h1>Jobs I applied to</h1>
      <p>I've applied to {readJobs.size} jobs</p>
      {appliedJobs.map((job) => {
        const read = read_jobs.find((r) => r.job_id === job.job_id)
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
                  <p>Applied {formatDate(read?.created_at)}</p>
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
