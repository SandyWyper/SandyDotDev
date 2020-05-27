import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = props => {
  const data = props.articleDetails
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p>{data.description}</p>
      <Img fluid={data.cover.childImageSharp.fluid} />
      <ul>
        {data.tags.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <Link to={props.path}>Read more...</Link>
    </div>
  )
}

ArticleCard.propTypes = {
  articleDetails: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}
export default ArticleCard
