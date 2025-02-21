import { Box, Flex, Text, Heading, Button } from "@radix-ui/themes"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import { useConnectivityState } from "electric-sql/react"

export const ConnectivityIcon = () => {
  const { status } = useConnectivityState()
  const connected = status === `connected`
  const iconStyle = {
    width: `15px`,
    height: `15px`,
    borderRadius: `50%`,
    background: connected
      ? `radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(0,200,0,1) 70%, rgba(0,150,0,1) 100%)`
      : `radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(200,100,0,1) 70%, rgba(150,50,0,1) 100%)`,
    boxShadow: connected
      ? `0 0 10px rgba(0, 255, 0, 0.5)`
      : `0 0 10px rgba(255, 165, 0, 0.5)`,
    border: `2px solid`,
    borderColor: connected ? `rgba(0, 255, 0, 0.8)` : `rgba(255, 165, 0, 0.8)`,
  }

  return <div style={iconStyle}></div>
}

export default function Root() {
  return (
    <Box style={{ width: 1200, margin: `auto` }}>
      <Flex asChild mb="4" gap="3">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/applied">Applied</Link>
          <ConnectivityIcon />
        </nav>
      </Flex>

      <Outlet />
    </Box>
  )
}
