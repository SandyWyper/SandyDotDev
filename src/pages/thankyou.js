import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Thankyou = () => (
  <>
    <SEO title="Thankyou" robots="noindex" />
    <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
      <div className="py-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
        <p className="max-w-md mb-12 lead">
          Your message has been sent successfully.
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
