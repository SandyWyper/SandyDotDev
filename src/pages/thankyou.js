import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TopNav from "../components/topNav"

const Thankyou = () => (
  <Layout>
    <TopNav />
    <SEO title="Thankyou" />
    <section className="background">
      <div className="container h-full min-h-screen p-8 pt-12 mx-auto border-solid md:border-l md:border-r border-color">
        <p className="max-w-md mb-12 lead">
          Your message has been submitted successfully.
          <br />
          Thanks for getting in touch. I'll get back to you as soon as i can.
        </p>
        <Link to="/" className="text-xl underline font-zilla">
          Return to home page
        </Link>
      </div>
    </section>
  </Layout>
)

export default Thankyou
