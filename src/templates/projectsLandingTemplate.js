import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import ArticleCard from "../components/articleCard"
import FeaturedArticle from "../components/featuredArticle"
import Nav from "../components/nav"
const ProjectList = props => {
  // render navigation between blog-listing pages if there are more then one.
  const { currentPage, numProjectPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numProjectPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const featuredPost = props.data.allMarkdownRemark.edges[0].node
  const posts = isFirst
    ? props.data.allMarkdownRemark.edges.filter((x, i) => i !== 0)
    : props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <Nav path={props.path} />
      <section className="container">
        <div className="lg:justify-between lg:flex">
          <h1 className="side">Projects</h1>
          <div className="max-w-md">
            <div className="relative px-8 py-8 lg:px-0">
              <blockquote className="z-10 text-xl">
                “For the things we have to learn before we can do them, we learn
                by doing them.”
              </blockquote>
              <p>- Aristotle</p>
              {/* <div className="absolute top-0 right-0 z-0 w-56 overflow-hidden opacity-25">
                <AristotleImage />
              </div> */}
            </div>
          </div>
        </div>
        {isFirst && (
          <FeaturedArticle
            articleDetails={featuredPost.frontmatter}
            path={featuredPost.fields.slug}
          />
        )}
        <div className="max-w-4xl px-4 mx-auto xl:px-0">
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
        </div>
      </section>
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
