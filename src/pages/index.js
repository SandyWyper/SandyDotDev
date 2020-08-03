import React from "react"
import SEO from "../components/seo"
import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"
// import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="bg-custom-mono-2">
      <HomeTopFold />
      <LatestProject />
      <LatestBlogPost />
    </div>
  </>
)

export default IndexPage
