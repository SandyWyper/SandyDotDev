import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import ArticleCard from "../components/articleCard"
import FeaturedArticle from "../components/featuredArticle"
import SEO from "../components/seo"

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
    <>
      <SEO
        title="Projects"
        description="Projects that I have built to learn how to build the things I previously couldn't."
        path={props.pageContext.slug}
      />
      <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
        <div className="pt-6 pb-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
          <h1 className="w-full max-w-4xl section-title lg:mx-auto">
            Projects
          </h1>

          {isFirst && (
            <FeaturedArticle
              articleDetails={featuredPost.frontmatter}
              path={featuredPost.fields.slug}
            />
          )}
          <hr />
          <div className="max-w-4xl px-4 pt-1 pb-12 mx-auto xl:px-0">
            {posts.map(({ node }, index) => (
              <div key={node.id}>
                <ArticleCard
                  articleDetails={node.frontmatter}
                  path={node.fields.slug}
                />
                {index !== posts.length - 1 && <hr key={`${node.id}-hr`} />}
              </div>
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
        </div>
      </section>
    </>
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
            coverAlt
            cover {
              childImageSharp {
                fluid(maxWidth: 1500) {
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
`

ProjectList.propTypes = {
  pageContext: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default ProjectList
