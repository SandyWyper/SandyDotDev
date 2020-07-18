import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const FeaturedArticle = props => {
  const data = props.articleDetails

  return (
    <section className="max-w-2xl mx-auto mb-16 rounded-lg">
      <div className="flex-col items-center md:flex">
        <Img
          fluid={{
            ...data.cover.childImageSharp.fluid,
            sizes: "(min-width: 768px) 505px, 80vw",
          }}
          className="w-10/12 m-4 mx-auto md:w-2/3"
          loading="eager"
          alt={data.coverAlt}
        />
        <Link to={props.path}>
          <div className="px-4 lg:px-0">
            <h3 className="section-header">{data.title}</h3>
            <p className="mb-1 text-xs">{data.date}</p>
            <p className="mb-1">{data.description}</p>
            <ul className="flex flex-wrap justify-end w-full pr-4 space-x-2">
              {data.tags.map(item => {
                return (
                  <li key={item} className="my-2 text-sm font-zilla">
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </Link>
      </div>
    </section>
  )
}
FeaturedArticle.propTypes = {
  articleDetails: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}
export default FeaturedArticle
