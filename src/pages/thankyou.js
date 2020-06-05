import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/topNav"

const Thankyou = () => (
  <Layout>
    <TopNav />
    <SEO title="Thankyou" />
    <section className="container mx-auto">
      <h1>Thanks</h1>

      <p className="max-w-md">
        Thanks for getting in touch. I'll get back to you as soon as i can.
      </p>
    </section>
  </Layout>
)

export default Thankyou
