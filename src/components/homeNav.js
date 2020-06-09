import React from "react"
import { Link } from "gatsby"

const HomeNav = () => {
  return (
    <nav className="home-nav">
      <ul className="hidden md:flex md:h-screen md:flex-col links">
        <li className="">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
export default HomeNav
