import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
                relativePath
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
  const latestProject = data.allMarkdownRemark.edges[0].node
  return (
    <section style={{ border: "1px solid grey" }}>
      {console.log(latestProject)}
      <h2>{latestProject.frontmatter.title}</h2>
      <date>{latestProject.frontmatter.date}</date>
      <p>{latestProject.frontmatter.description}</p>
    </section>
  )
}

export default LatestProject
