import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ArticleCard from "./articleCard"

const LatestProject = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/projects/" } } }
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
  const projectDetails = data.allMarkdownRemark.edges[0].node.frontmatter
  const projectPath = data.allMarkdownRemark.edges[0].node.fields.slug
  return (
    <section style={{ border: "1px solid grey" }}>
      <header>
        <Link to="/projects">
          <h3>Projects</h3>
        </Link>
      </header>
      <ArticleCard articleDetails={projectDetails} path={projectPath} />
    </section>
  )
}

export default LatestProject
