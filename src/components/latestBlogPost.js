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
    <section className="latest-blog latest-blog-background">
      <div>
        <header className="mt-4">
          <Link to="/blog">
            <h3 className="section-header">Blog</h3>
          </Link>
        </header>
        <div className="latest-article">
          <ArticleCard articleDetails={postDetails} path={postPath} />
        </div>
      </div>
    </section>
  )
}

export default LatestBlogPost
