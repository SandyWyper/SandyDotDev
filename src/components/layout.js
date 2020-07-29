import React from "react"
import PropTypes from "prop-types"
import ReturnToTopArrow from "../components/returnToTopArrow"
import { ThemeProvider } from "../components/darkThemeContext"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="wrapper">
      <ThemeProvider>
        {children}
        <Footer />
        <ReturnToTopArrow />
      </ThemeProvider>
    </div>
  )
}
Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
export default Layout
