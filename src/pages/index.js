import React from "react"
import SEO from "../components/seo"
import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"

const IndexPage = () => (
  <div className="bg-custom-mono-2">
    <SEO title="Home" />
    <HomeTopFold />
    <LatestProject />

    <LatestBlogPost />
  </div>
)

export default IndexPage
