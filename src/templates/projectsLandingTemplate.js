import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import ArticleCard from "../components/articleCard"

const ProjectList = props => {
  // render navigation between blog-listing pages if there are more then one.
  const { currentPage, numProjectPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numProjectPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout path={props.path}>
      {posts.map(({ node }) => (
        <ArticleCard
          key={node.id}
          articleDetails={node.frontmatter}
          path={node.fields.slug}
        />
      ))}
      {!isFirst && (
        <Link to={`/projects/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`/projects/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  )
}

export const projectListQuery = graphql`
  query projectListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
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
`
ProjectList.propTypes = {
  pageContext: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default ProjectList
