import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TopNav from "../components/topNav"
import PropTypes from "prop-types"

const BlogTemplate = props => {
  const { markdownRemark } = props.data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <TopNav />
      <SEO
        title="Blog"
        description={`${frontmatter.title} / ${frontmatter.description}`}
      />
      <section className="background nav-space">
        <div className="container mx-auto border-solid md:border-l md:border-r border-color">
          <div>
            <div className="max-w-md px-4 pt-8 mx-auto">
              <Img
                className="mb-4"
                fluid={frontmatter.cover.childImageSharp.fluid}
                alt={frontmatter.coverAlt}
                loading="eager"
              />
              <div className="flex flex-col flex-wrap px-2 sm:flex-row sm:items-center sm:px-0">
                <h2 className="mb-2 leading-none sm:mb-4">
                  {frontmatter.title}
                </h2>

                <div className="w-full sm:flex">
                  <p className="text-sm">{frontmatter.date}</p>
                  <ul className="flex flex-wrap space-x-2 sm:ml-auto">
                    {frontmatter.tags.map(item => {
                      return (
                        <li key={item} className="my-2 text-sm font-zilla">
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <article
            className="max-w-xl px-4 pb-40 mx-auto mt-8 md:px-0 article-styles"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* Maybe a link to the next article */}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "DD/MM/YYYY")
        tags
        coverAlt
        cover {
          childImageSharp {
            fluid(
              sizes: "(max-width: 600px) 95vw, 600px"
              srcSetBreakpoints: [300, 500, 700, 1000, 1200]
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
    }
  }
`
BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogTemplate
