import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" robots="noindex" />
    <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
      <div className="md:col-span-2 md:w-full xl:col-span-1" />
      <div className="container py-12 md:col-span-3 md:col-3/5 xl:col-2/4 md:pr-4">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Return to home ..</Link>
      </div>
    </section>
  </>
)

export default NotFoundPage
