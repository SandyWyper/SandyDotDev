import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
      <h2>{postDetails.title}</h2>
      <p>{postDetails.date}</p>
      <p>{postDetails.description}</p>
      <Img fluid={postDetails.cover.childImageSharp.fluid} />
      <ul>
        {postDetails.tags.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <Link to={postPath}>Read more...</Link>
    </section>
  )
}

export default LatestBlogPost
