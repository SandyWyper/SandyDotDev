import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const ProjectTemplate = props => {
  const { markdownRemark } = props.data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  const sharingImage = frontmatter.cover.childImageSharp.resize.src
  const sharingImageAlt = frontmatter.coverAlt

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        path={props.pageContext.slug}
        image={sharingImage}
        imageAlt={sharingImageAlt}
        type="article"
      />
      <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
        <div className="py-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
          <div>
            <div className="max-w-md px-4 mx-auto xl:max-w-lg">
              <Img
                className="mb-4 custom-border sharp-drop-shadow"
                fluid={frontmatter.cover.childImageSharp.fluid}
                alt={frontmatter.coverAlt}
                loading="eager"
              />
              <div className="flex-col flex-wrap md:flex sm:flex-row sm:items-center sm:px-0 md:w-full">
                <h1 className="mb-2 leading-none h2 sm:mb-4">
                  {frontmatter.title}
                </h1>
                <div className="w-full mb-2 md:flex">
                  <div className="md:w-1/2 ">
                    <p className="mb-2 text-xs">{frontmatter.date}</p>
                    <a
                      className="flex items-center mb-2"
                      href={frontmatter.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-8 h-8 mr-2 fill-current text"
                        viewBox="0 -256 1950 1950"
                      >
                        <title>VIEW LIVE</title>
                        <g transform="matrix(1,0,0,-1,15.186441,1405.4576)">
                          <path d="m 416,256 q -66,0 -113,47 -47,47 -47,113 v 704 q 0,66 47,113 47,47 113,47 h 1088 q 66,0 113,-47 47,-47 47,-113 V 416 q 0,-66 -47,-113 -47,-47 -113,-47 H 416 z m -32,864 V 416 q 0,-13 9.5,-22.5 Q 403,384 416,384 h 1088 q 13,0 22.5,9.5 9.5,9.5 9.5,22.5 v 704 q 0,13 -9.5,22.5 -9.5,9.5 -22.5,9.5 H 416 q -13,0 -22.5,-9.5 Q 384,1133 384,1120 z M 1760,192 h 160 V 96 Q 1920,56 1873,28 1826,0 1760,0 H 160 Q 94,0 47,28 0,56 0,96 v 96 H 160 1760 z M 1040,96 q 16,0 16,16 0,16 -16,16 H 880 q -16,0 -16,-16 0,-16 16,-16 h 160 z" />
                        </g>
                      </svg>
                      <p>view live</p>
                    </a>
                    <a
                      className="flex items-center mb-4"
                      href={frontmatter.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 mr-2 fill-current text"
                      >
                        <title>VIEW REPO</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <p>view on GitHub</p>
                    </a>
                  </div>
                  <div className="text-right md:w-1/2 md:flex md:flex-col md:justify-end">
                    <ul className="flex flex-wrap justify-center pb-2 space-x-3 md:justify-end">
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
        description
        category
        date(formatString: "D/M/YYYY")
        tags
        repository
        live
        coverAlt
        cover {
          childImageSharp {
            fluid(
              sizes: "(max-width: 600px) 95vw, 600px"
              srcSetBreakpoints: [300, 500, 700, 1000, 1200]
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
      html
    }
  }
`

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectTemplate
