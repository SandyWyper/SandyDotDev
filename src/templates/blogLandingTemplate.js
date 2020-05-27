import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import ArticleCard from "../components/articleCard"

const BlogList = props => {
  // render navigation between blog-listing pages if there are more then one.
  const { currentPage, numBlogPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numBlogPages
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

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
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

BlogList.propTypes = {
  pageContext: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
export default BlogList
