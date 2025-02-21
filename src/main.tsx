import React from "react"
import ReactDOM from "react-dom/client"
import "@radix-ui/themes/styles.css"
import "./index.css"
import "@fontsource/pt-sans/latin.css"
import "./typography.css"
import { Theme } from "@radix-ui/themes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import { ElectricalProvider } from "./context"
import { initElectric, electricSqlLoader } from "electric-query"
import { Electric, schema } from "./generated/client"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { authToken, dummyUserId } from "./auth"

import Root from "./routes/root"
import Index from "./routes/index"
import Applied from "./routes/applied"

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: async (props) => {
          const url = new URL(props.request.url)
          const key = url.pathname + url.search
          await electricSqlLoader<Electric>({
            key,
            shapes: ({ db, electric }) => [
              {
                shape: db.jobs.sync(),
                isReady: async () => {
                  return true
                },
              },
              {
                shape: db.read_jobs.sync(),
                isReady: async () => {
                  return true
                },
              },
            ],
            queries:
              ({ db }) =>
              () =>
                Index.queries({
                  db,
                }),
          })

          return null
        },
      },
      {
        path: `/applied`,
        element: <Applied />,
        loader: async (props) => {
          const url = new URL(props.request.url)
          const key = url.pathname + url.search
          await electricSqlLoader<Electric>({
            key,
            shapes: ({ db, electric }) => [
              {
                shape: db.jobs.sync(),
                isReady: async () => {
                  return true
                },
              },
              {
                shape: db.read_jobs.sync(),
                isReady: async () => {
                  return true
                },
              },
            ],
            queries:
              ({ db }) =>
              () =>
                Applied.queries({
                  db,
                }),
          })

          return null
        },
      },
    ],
  },
])

console.log(`electricurl`, import.meta.env.VITE_ELECTRIC_URL)
console.log(`foo`, import.meta.env.VITE_FOO)
async function render() {
  const electric = await initElectric({
    appName: `shannon-job-filterer`,
    schema,
    sqliteWasmPath: sqliteWasm,
    token: authToken(),
    config: {
      timeout: 15000,
      debug: true, //DEBUG_MODE,
      url: import.meta.env.VITE_ELECTRIC_URL,
    },
  })
  ReactDOM.createRoot(document.getElementById(`root`)!).render(
    <React.StrictMode>
      <Theme>
        <ElectricalProvider db={electric}>
          <RouterProvider router={router} />
        </ElectricalProvider>
      </Theme>
    </React.StrictMode>
  )
}

render()
