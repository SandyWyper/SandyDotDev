import React from "react"
import Link from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const HomeNav = () => {
  return (
    <nav className="home-nav">
      <ul className="hidden md:flex md:h-screen md:flex-col links text">
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
