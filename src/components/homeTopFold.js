import React from "react"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"
// import TopFoldImage from "./topFoldImage"

const HomeTopFold = () => {
  return (
    <section className="w-full p-8 bg-green-600 sm:p-16 md:p-0 md:grid md:grid-cols-6 top-fold">
      {/* <TopFoldImage /> */}
      <div className="flex flex-col justify-center h-full md:col-end-6 md:col-start-2 ">
        <h1>SandyDotDev</h1>
        <h2 className="leading-tight">Hi, welcome to my site!</h2>
        <h4>
          I'm a born again web developer who's into learning things and building
          stuff.
        </h4>
        <ul>
          <li className="scale-hover-2">
            <LinkedInLink />
          </li>
          <li className="scale-hover-2">
            <GitHubLink />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HomeTopFold
