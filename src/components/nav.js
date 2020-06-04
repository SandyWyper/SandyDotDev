import React from "react"
import PropTypes from "prop-types"
import HomeNav from "./homeNav"
import TopNav from "./topNav"

const Nav = props => {
  const isHomePage = props.path === "/" ? <HomeNav /> : <TopNav />

  return <>{isHomePage}</>
}

Nav.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Nav
