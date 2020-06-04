import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"

const IndexPage = props => (
  <Layout path={props.path}>
    {console.log(props)}
    <SEO title="Home" />

    <HomeTopFold />
    <LatestProject />
    <LatestBlogPost />
  </Layout>
)

export default IndexPage
