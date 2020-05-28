import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const TopFoldImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me_PORTRAIT.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1600
            duotone: { highlight: "#b3f542", shadow: "#091345", opacity: 20 }
            traceSVG: { color: "#A7DEF6" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default TopFoldImage
