import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const Nav = props => (
  <nav className={props.path === "/" ? "bg-red" : "bg-blue"}>
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

Nav.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Nav
