import React from "react"
import { Link } from "gatsby"

const HomeNav = () => {
  return (
    <nav className="home-nav this-is-home-nav">
      <ul>
        <li className="hidden md:block this-is-home-nav">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hidden md:block">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hidden md:block">
          <Link to="/contact">Contact</Link>
        </li>
        <button class="hamburger hamburger--collapse md:hidden" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </ul>
    </nav>
  )
}
export default HomeNav
