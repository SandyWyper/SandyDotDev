import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Footer from "../components/footer"
import TopNav from "../components/topNav"
import PropTypes from "prop-types"
import { ThemeProvider } from "../components/darkThemeContext"
import ReturnToTopArrow from "../components/returnToTopArrow"

const Layout = ({ pageContext, children, location }) => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="wrapper">
      <ThemeProvider>
        {/* <MobileNav /> */}
        {pageContext.homeLayout ? (
          <TransitionProvider location={location}>
            <TransitionViews>{children}</TransitionViews>
          </TransitionProvider>
        ) : (
          <>
            <TopNav title={pageContext.navTitle} />
            <div style={{ height: "3.3rem" }} />
            <TransitionProvider
              location={location}
              mode="successive"
              enter={{
                opacity: 0,
              }}
              usual={{
                opacity: 1,
              }}
              leave={{
                opacity: 0,

                config: {
                  duration: 100,
                },
              }}
            >
              <TransitionViews>{children}</TransitionViews>
            </TransitionProvider>
          </>
        )}
        <Footer />
      </ThemeProvider>
      <ReturnToTopArrow />
    </div>
  )
}

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
export default Layout
