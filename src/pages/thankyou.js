import React from "react"
import SEO from "../components/seo"
import Link from "gatsby-plugin-transition-link"

const Thankyou = () => (
  <>
    {/* <TopNav /> */}
    <SEO title="Thankyou" />
    <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
      <div className="md:col-span-2 md:w-full xl:col-span-1" />
      <div className="container py-12 md:col-span-3 md:col-3/5 xl:col-2/4 md:pr-4">
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
  </>
)

export default Thankyou
