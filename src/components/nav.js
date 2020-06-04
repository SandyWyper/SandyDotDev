import React from "react"
import PropTypes from "prop-types"
import HomeNav from "./homeNav"
import TopNav from "./topNav"

const Nav = props =>
  props.path === "/" || props.location.key === "initial" ? (
    <HomeNav />
  ) : (
    <TopNav />
  )

Nav.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Nav
