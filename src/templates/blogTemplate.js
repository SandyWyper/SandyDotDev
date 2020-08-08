import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const BlogTemplate = props => {
  const { markdownRemark } = props.data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO
        title="Blog"
        description={`${frontmatter.title} / ${frontmatter.description}`}
      />
      <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
        <div className="md:col-span-2 md:w-full xl:col-span-1" />
        <div className="container py-12 md:col-span-3 md:col-3/5 xl:col-2/4 md:pr-4">
          <div className="max-w-md px-4 mx-auto xl:max-w-lg">
            <div>
              <Img
                className="mb-4 custom-border sharp-drop-shadow"
                fluid={frontmatter.cover.childImageSharp.fluid}
                alt={frontmatter.coverAlt}
                loading="eager"
              />
              <div className="flex flex-col flex-wrap px-2 sm:flex-row sm:items-center sm:px-0">
                <h2 className="mb-2 leading-none sm:mb-4">
                  {frontmatter.title}
                </h2>

                <div className="w-full mb-2 md:flex">
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
            className="max-w-2xl px-4 pb-40 mx-auto mt-8 md:px-0 article-styles"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* Maybe a link to the next article */}
        </div>
      </section>
    </>
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
