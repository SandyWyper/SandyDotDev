import React, { useContext } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"
import { ThemeContext } from "../layouts/darkThemeContext"
import DownArrow from "../components/downArrow"

const IndexPage = () => {
  const { colorMode } = useContext(ThemeContext)

  return (
    <>
      <SEO title="Home" />
      <section
        className={`md:grid md:grid-cols-5 xl:grid-cols-4 nav-space top-fold ${
          colorMode === "dark"
            ? "dark-theme-background"
            : "light-theme-background"
        }`}
      >
        <div className="container py-16 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
          <div className="flex flex-col h-full mx-8 md:col-end-6 md:col-start-2 text">
            <h2 className="mb-4 leading-tight">Hi, welcome to my site!</h2>
            <div className="max-w-2xl mb-12">
              <h5 className="mb-4 ">
                I'm a born again web developer who's into learning things and
                building stuff.
              </h5>

              <h5 className="mb-4">
                Architecture graduate, 8 years RNLI beach Lifeguard, now coding
                everyday and loving it!
              </h5>
              <div className="float-right">
                <Link to="/about" className="link">
                  about me
                </Link>
              </div>
            </div>
          </div>
          <DownArrow />
        </div>
      </section>
      <LatestProject />
      <LatestBlogPost />
    </>
  )
}

export default IndexPage
