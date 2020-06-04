// import { Link } from "gatsby"
// import Image from "../components/image"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Nav path={props.path} />
    <HomeTopFold />
    <LatestProject />
    <LatestBlogPost />
  </Layout>
)

export default IndexPage
