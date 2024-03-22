import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export default function Root() {
  return (
    <div style={{ width: 1200, margin: `auto` }}>
      <Link style={{ marginRight: 8 }} to="/">
        Home
      </Link>
      <Link to="/applied">Applied</Link>
      <Outlet />
    </div>
  )
}
