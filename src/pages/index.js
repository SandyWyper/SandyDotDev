import React, { useContext } from "react"
import SEO from "../components/seo"
import LatestProject from "../components/latestProject"
import LatestBlogPost from "../components/latestBlogPost"
import { ThemeContext } from "../components/darkThemeContext"

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
        <div className="md:col-span-2 md:w-full xl:col-span-1" />
        <div className="container py-12 md:col-span-3 md:col-3/5 xl:col-2/4 md:pr-4">
          <div className="flex flex-col justify-center h-full mx-8 lg:mx-20 md:col-end-6 md:col-start-2 text">
            <h2 className="leading-tight">Hi, welcome to my site!</h2>
            <h5 className="max-w-2xlk">
              I'm a born again web developer who's into learning things and
              building stuff.
            </h5>
          </div>
        </div>
      </section>
      <LatestProject />
      <LatestBlogPost />
    </>
  )
}

export default IndexPage
