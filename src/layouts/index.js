import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Footer from "../components/footer"
import TopNav from "../components/topNav"
import MobileNav from "../components/mobileNav"
import PropTypes from "prop-types"

const Layout = ({ pageContext, children, location }) => {
  const isBrowser = typeof window !== `undefined`
  // if (isBrowser) {
  return (
    <div className="relative overflow-hidden">
      {console.log("layout render")}
      <MobileNav />
      {pageContext.homeLayout ? (
        <TransitionProvider location={location}>
          <TransitionViews>{children}</TransitionViews>
        </TransitionProvider>
      ) : (
        <>
          <TopNav title={pageContext.navTitle} />
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
    </div>
  )
  // }
  // return (
  //   <div className="min-w-full min-h-screen border bg-custom-blue border-custom-black"></div>
  // )
}

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
export default Layout
