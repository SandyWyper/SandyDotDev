import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = props => {
  const data = props.articleDetails
  return (
    <Link to={props.path}>
      <div className="relative z-10 p-4 py-8 card-hover">
        <div className="mb-2 lg:flex">
          <div className="scale-div">
            <Img
              className="w-40 mb-8 sharp-drop-shadow custom-border"
              fluid={{ ...data.cover.childImageSharp.fluid, sizes: "200px" }}
              alt={data.coverAlt}
            />
          </div>
          <div className="lg:ml-4">
            <h4 className="leading-none">{data.title}</h4>
            <p className="mb-4 text-xs">{data.date}</p>
            <p className="mb-1">{data.description}</p>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap justify-end space-x-2">
            {data.tags.map(item => {
              return (
                <li key={item} className="my-2 text-sm font-zilla">
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Link>
  )
}

ArticleCard.propTypes = {
  articleDetails: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}
export default ArticleCard
