import { Link } from "gatsby"
import { Location } from "@reach/router"
import React from "react"

export default () => (
  <Location>
    {({ location }) => {
      console.log(location)
      return (
        <nav className={location.pathname === "/" ? "bg-red" : "bg-blue"}>
          <ul>
            <li key="home">
              <Link to="/">Home</Link>
            </li>
            <li key="projects">
              <Link to="/projects">Projects</Link>
            </li>
            <li key="blog">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      )
    }}
  </Location>
)
