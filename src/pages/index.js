// import { Link } from "gatsby"
// import Image from "../components/image"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeTopFold from "../components/homeTopFold"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"

import "../styles/index.scss"

const IndexPage = props => (
  <Layout path={props.path}>
    <SEO title="Home" />
    <HomeTopFold />
    <LatestProject />
    <LatestBlogPost />
  </Layout>
)

export default IndexPage
