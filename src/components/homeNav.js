import React from "react"
import { Link } from "gatsby"
// import DarkToggle from "./darkModeToggle"

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
        {/* <li className="hidden w-12 mr-2 md:block">
          <DarkToggle mobileNav={false} />
        </li> */}
      </ul>
    </nav>
  )
}
export default HomeNav
