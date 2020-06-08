import React from "react"
import { Link } from "gatsby"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"
import PropTypes from "prop-types"
import NavTitle from "./navTitle"
import HomeLinkIcon from "./homeLinkIcon"
import MobileNav from "./mobileNav"

const TopNav = props => {
  return (
    <nav className="top-nav">
      <div className="flex items-center w-full p-3 shadow-md">
        <NavTitle title={props.title} />
        <ul className="flex items-center justify-end w-full">
          <li className="hidden md:block">
            <HomeLinkIcon />
          </li>
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
        <MobileNav />
      </div>
    </nav>
  )
}
TopNav.propTypes = {
  title: PropTypes.string,
}

export default TopNav
