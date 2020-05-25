import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"

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
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return <div key={node.fields.slug}>{title}</div>
      })}
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
          fields {
            slug
          }
          frontmatter {
            title
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
