import React from "react"
import { Link } from "gatsby"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"

const TopNav = () => {
  return (
    <nav className="top-nav this-is-top-nav">
      <div className="flex items-center w-full p-3 bg-green-600 shadow-md">
        <Link to="/" className="nav-title ">
          SandyDotDev
        </Link>
        <ul className="flex items-center justify-end w-full">
          <li className="hidden md:block">
            <Link
              to="/projects"
              activeClassName="underline"
              partiallyActive={true}
            >
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/blog" activeClassName="underline" partiallyActive={true}>
              Blog
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/contact"
              activeClassName="underline"
              partiallyActive={true}
            >
              Contact
            </Link>
          </li>
          <li className="hidden w-12 md:block">
            <LinkedInLink />
          </li>
          <li className="hidden w-12 md:block">
            <GitHubLink />
          </li>
        </ul>
        <button class="hamburger  hamburger--collapse md:hidden" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </nav>
  )
}
export default TopNav
