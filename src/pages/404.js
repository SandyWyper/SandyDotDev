import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TopNav from "../components/topNav"

const NotFoundPage = () => (
  <Layout>
    <TopNav />
    <SEO title="404: Not found" />
    <section className="background">
      <div className="container min-h-screen pt-12 mx-auto border-solid md:border-l md:border-r border-color">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
