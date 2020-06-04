import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"

const Nav = props => {
  const isHomePage = props.path === "/"

  return (
    <div>
      {isHomePage ? (
        <nav className="home-nav">
          {console.log("from nav.js - path is = ", props.path, isHomePage)}
          <ul>
            <li className="hidden md:block">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/contact">Contact</Link>
            </li>
            <button
              class="hamburger hamburger--collapse md:hidden"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </ul>
        </nav>
      ) : (
        <nav className="top-nav">
          <div className="flex items-center w-full p-3 bg-green-600 shadow-md">
            <Link to="/" className="nav-title">
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
                <Link
                  to="/blog"
                  activeClassName="underline"
                  partiallyActive={true}
                >
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
            <button
              class="hamburger  hamburger--collapse md:hidden"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </nav>
      )}
    </div>
  )
}

Nav.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Nav
