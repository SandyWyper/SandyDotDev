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
  const projectDetails = data.allMarkdownRemark.edges[0].node.frontmatter
  const projectPath = data.allMarkdownRemark.edges[0].node.fields.slug
  return (
    <section
      className="md:grid md:grid-cols-5 xl:grid-cols-4 latest-project-background"
      id="latest-project"
    >
      <div className="py-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
        <div className="mx-8 ">
          <header className="mt-4">
            <Link to="/projects">
              <h3 className="section-header">Projects</h3>
            </Link>
          </header>
          <div className="latest-article">
            <ArticleCard articleDetails={projectDetails} path={projectPath} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProject
