import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ProjectTemplate = props => {
  const { markdownRemark } = props.data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout path={props.path}>
      <div className="project-container">
        <div className="project-post">
          <Img fluid={frontmatter.cover.childImageSharp.fluid} />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="project-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "DD/MM/YYY")
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
export default ProjectTemplate
