import React from "react"
import PropTypes from "prop-types"
import ReturnToTopArrow from "../components/returnToTopArrow"
import { ThemeProvider } from "../components/darkThemeContext"
import Footer from "../components/footer"
import Nav from "../components/nav"

const Layout = props => {
  const { children } = props
  return (
    <div className="relative min-h-screen overflow-hidden" id="wrapper">
      <ThemeProvider>
        <Nav />
        {children}
        <Footer />
        <ReturnToTopArrow />
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
