import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ArticleCard from "./articleCard"

const LatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD/MM/YYYY")
              tags
              posttype
              description
              cover {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const postDetails = data.allMarkdownRemark.edges[0].node.frontmatter
  const postPath = data.allMarkdownRemark.edges[0].node.fields.slug
  return (
    <section style={{ border: "1px solid grey" }}>
      <header>
        <Link to="/blog">
          <h3>Blog</h3>
        </Link>
      </header>
      <ArticleCard articleDetails={postDetails} path={postPath} />
    </section>
  )
}

export default LatestBlogPost
