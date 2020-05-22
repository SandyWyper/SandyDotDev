import React from "react"
import { graphql, Link } from "gatsby"

export default function ProjectTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="project-container">
      <div className="project-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="project-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
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
          absolutePath
        }
      }
      html
    }
  }
`
