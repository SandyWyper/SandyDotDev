import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import Layout from "../components/layout"
import TopNav from "../components/topNav"
import MobileNav from "../components/mobileNav"

export default ({ pageContext, children, location }) => {
  // if (pageContext.homeLayout) {
  //   return (
  //     <Layout>
  //       <HomeNav />
  //       <TransitionProvider location={location}>
  //         <TransitionViews>{children}</TransitionViews>
  //       </TransitionProvider>
  //     </Layout>
  //   )
  // }
  // return (
  //   <Layout>
  // <TopNav title={pageContext.navTitle} />
  // <TransitionProvider location={location}>
  //   <TransitionViews>{children}</TransitionViews>
  // </TransitionProvider>
  //   </Layout>
  // )
  return (
    <Layout>
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
    </Layout>
  )
}
