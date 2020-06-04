import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AristotleImage = props => {
  const image = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "aristotle.jpeg" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={image.allFile.edges[0].node.childImageSharp.fluid}
      alt="Aristotle"
      className=""
    />
  )

  // <Img fluid={props.}
}

export default AristotleImage
