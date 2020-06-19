import React from "react"
import SEO from "../components/seo"
// import TopNav from "../components/topNav"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section className="background">
      <div className="container min-h-screen pt-12 mx-auto border-l border-r border-solid border-custom-mono-2">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </>
)

export default NotFoundPage
