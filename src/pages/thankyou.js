import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Thankyou = () => (
  <>
    <SEO title="Thankyou" />
    <section className="background">
      <div className="container h-full min-h-screen p-8 pt-12 mx-auto border-l border-r border-solid border-custom-mono-2">
        <h1>Thanks</h1>

        <p className="max-w-md mb-12">
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
