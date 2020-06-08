import React from "react"
import { Link } from "gatsby"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"
import PropTypes from "prop-types"
import NavTitle from "./navTitle"

const TopNav = props => {
  return (
    <nav className="top-nav">
      <div className="flex items-center w-full p-3 bg-green-600 shadow-md">
        <NavTitle title={props.title} />
        <ul className="flex items-center justify-end w-full">
          <li className="hidden md:block">
            <Link
              to="/projects"
              activeClassName="uppercase"
              partiallyActive={true}
            >
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/blog" activeClassName="uppercase" partiallyActive={true}>
              Blog
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              to="/contact"
              activeClassName="uppercase"
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
        <button
          className="hamburger hamburger--collapse md:hidden"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </nav>
  )
}
TopNav.propTypes = {
  title: PropTypes.string,
}

export default TopNav
