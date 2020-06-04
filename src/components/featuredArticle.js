import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const FeaturedArticle = props => {
  const data = props.articleDetails
  return (
    <section className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center">
        <Img
          fluid={data.cover.childImageSharp.fluid}
          className="w-9/12 m-4 md:w-2/3"
        />
        <Link to={props.path}>
          <div className="px-4 lg:px-0">
            <h2 className="section-header">{data.title}</h2>
            <p className="mb-1 text-xs">{data.date}</p>
            <p className="mb-1">{data.description}</p>
            <ul className="flex justify-end w-full pr-4 space-x-2">
              {data.tags.map(item => {
                return (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </Link>

        {/* <hr className="w-full mb-1" />
        <hr className="w-full mb-8" /> */}
      </div>
    </section>
  )
}
FeaturedArticle.propTypes = {
  articleDetails: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}
export default FeaturedArticle
