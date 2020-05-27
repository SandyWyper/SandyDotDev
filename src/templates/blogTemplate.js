import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogTemplate = props => {
  const { markdownRemark } = props.data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout path={props.path}>
      {console.log(props)}
      <div className="blog-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
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
export default BlogTemplate
