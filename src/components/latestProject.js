import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link"
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
    <section className="md:grid md:grid-cols-5 xl:grid-cols-4 latest-project-background">
      <div className="md:col-span-2 md:w-full xl:col-span-1" />
      <div className="container py-12 md:col-span-3 md:col-3/5 xl:col-2/4 md:pr-4 ">
        <div className="mx-8 lg:mx-20">
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
