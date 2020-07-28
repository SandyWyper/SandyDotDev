import React, { useState } from "react"
import { Link } from "gatsby"
// import LinkedInLink from "./linkedInLink"
// import GitHubLink from "./gitHubLink"
import PropTypes from "prop-types"
import NavTitle from "./navTitle"
import HomeLinkIcon from "./homeLinkIcon"
import DarkToggle from "./darkModeToggle"
import useScrollPosition from "../lib/useScrollPosition"
import { useSpring, animated } from "react-spring"
import MobileNav from "../components/mobileNav"

const TopNav = props => {
  const [isShown, setIsShown] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const show = currPos.y === 0 || currPos.y > prevPos.y
      if (show !== isShown) setIsShown(show)
    },
    [isShown],
    undefined,
    undefined,
    50
  )

  const revealSpring = useSpring({
    marginTop: isShown ? "0rem" : "-3.3rem",
    config: { mass: 1, tension: 200, friction: 30 },
  })

  return (
    <animated.nav
      style={revealSpring}
      className="fixed inset-x-0 z-30 changing-shadow width-full top-nav background-primary"
    >
      <MobileNav />
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
          {/* <li className="hidden w-12 md:block">
            <LinkedInLink />
            </li>
            <li className="hidden w-12 md:block">
            <GitHubLink />
          </li> */}
          <li className="hidden w-12 mr-2 md:block">
            <DarkToggle mobileNav={false} />
          </li>
        </ul>
      </div>
    </animated.nav>
  )
}

TopNav.propTypes = {
  title: PropTypes.string,
}

export default TopNav
