import React from "react"
import { Link } from "gatsby"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"
import PropTypes from "prop-types"
import NavTitle from "./navTitle"
import HomeLinkIcon from "./homeLinkIcon"
import DarkToggle from "./darkModeToggle"

const TopNav = props => {
  return (
    <nav className="z-30 shadow-md top-nav background-primary">
      <div className="container flex items-center w-full p-3 mx-auto top-nav-content">
        <NavTitle title={props.title} />
        <ul className="flex items-center justify-end w-full">
          <li className="hidden md:block">
            <Link to="/projects" activeClassName="" partiallyActive={true}>
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/blog" activeClassName="" partiallyActive={true}>
              Blog
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/contact" activeClassName="" partiallyActive={true}>
              Contact
            </Link>
          </li>
          <li className="hidden w-12 md:block">
            <HomeLinkIcon />
          </li>
          <li className="hidden w-12 md:block">
            <LinkedInLink />
          </li>
          <li className="hidden w-12 md:block">
            <GitHubLink />
          </li>
          <li className="hidden w-12 mr-2 md:block">
            <DarkToggle mobileNav={false} />
          </li>
        </ul>
      </div>
    </nav>
  )
}
TopNav.propTypes = {
  title: PropTypes.string,
}

export default TopNav
