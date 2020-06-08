import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import Layout from "../components/layout"
import TopNav from "../components/topNav"

export default ({ pageContext, children, location }) => {
  if (pageContext.homeLayout) {
    return (
      <TransitionProvider location={location}>
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    )
  }
  return (
    <Layout>
      <TopNav title={pageContext.navTitle} />
      <TransitionProvider location={location}>
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </Layout>
  )
}
