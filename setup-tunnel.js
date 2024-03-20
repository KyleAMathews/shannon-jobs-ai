const { spawn } = require(`child_process`)
const localtunnel = require(`localtunnel`)
const fs = require(`fs`)

;(async () => {
  const [electricTunnel, viteTunnel] = await Promise.all([
    await localtunnel({ port: 5133 }),
    await localtunnel({ port: 5173 }),
  ])

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(`vite is accessible at`, viteTunnel.url)
  console.log(`VITE_ELECTRIC_URL`, electricTunnel.url)

  const envContent = `VITE_ELECTRIC_URL=${electricTunnel.url}`

  fs.writeFileSync(`.env`, envContent)

  spawn(`vite`, { stdio: `inherit` })
})()
