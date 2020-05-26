// import { Link } from "gatsby"
// import Image from "../components/image"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"

const IndexPage = props => (
  <Layout path={props.location.pathname}>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <HomeTopFold />
    <LatestProject />
    <LatestBlogPost />
  </Layout>
)

export default IndexPage
