import React from "react"
import PropTypes from "prop-types"
import ReturnToTopArrow from "../components/returnToTopArrow"
import { ThemeProvider } from "./darkThemeContext"
import Footer from "../components/footer"
import Nav from "./nav"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

const Layout = ({ children, location, path }) => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="wrapper">
      <ThemeProvider>
        <Nav path={path} />
        <TransitionProvider
          location={location}
          enter={{
            opacity: 0,
            config: { duration: 600 },
          }}
          leave={{
            opacity: 1,
            config: { duration: 300 },
          }}
        >
          <TransitionViews>{children}</TransitionViews>
        </TransitionProvider>
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
