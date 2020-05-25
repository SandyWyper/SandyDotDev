import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"

class ProjectList extends React.Component {
  render() {
    // render navigation between blog-listing pages if there are more then one.
    const { currentPage, numBlogPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numBlogPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout path={this.props.path}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{title}</div>
        })}
        {!isFirst && (
          <Link to={`/blog/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={`/blog/${nextPage}`} rel="next">
            Next Page →
          </Link>
        )}
      </Layout>
    )
  }
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
