import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = props => {
  const data = props.articleDetails
  return (
    <Link to={props.path}>
      <div className="p-4 my-8 bg-gray-300 shadow-md card-hover">
        <div className="mb-2 md:flex">
          <div className="scale-div">
            <Img
              className="w-40 h-32 rounded-md shadow"
              fluid={data.cover.childImageSharp.fluid}
            />
          </div>
          <div className="pr-4 md:ml-4">
            <h3 class="leading-none">{data.title}</h3>
            <p className="mb-1 text-xs">{data.date}</p>
            <p className="mb-1">{data.description}</p>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-wrap justify-end pr-4 space-x-2">
            {data.tags.map(item => {
              return (
                <li key={item} className="text-sm">
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
