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
                  fluid(
                    maxWidth: 600
                    srcSetBreakpoints: [300, 400, 500, 600]
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
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
    <section className="md:grid md:grid-cols-5 xl:grid-cols-4 latest-blog-background">
      <div className="py-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
        <div className="mx-8 ">
          <header className="mt-4">
            <Link to="/blog">
              <h3 className="section-header">Blog</h3>
            </Link>
          </header>
          <div className="latest-article">
            <ArticleCard articleDetails={postDetails} path={postPath} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestBlogPost
