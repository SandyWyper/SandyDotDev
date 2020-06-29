import React from "react"
import SEO from "../components/seo"
import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="A portfolio and blog site for me. Stuff I've built, things I've learned."
    />
    <div className="bg-custom-mono-2">
      <HomeTopFold />
      <LatestProject />

      <LatestBlogPost />
    </div>
  </>
)

export default IndexPage
