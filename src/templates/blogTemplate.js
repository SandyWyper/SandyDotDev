import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const BlogTemplate = props => {
  const { markdownRemark } = props.data // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout path={props.path}>
      {console.log(props)}
      <section className="container">
        <div className="">
          <div className="max-w-md mx-auto mt-8">
            <Img
              className="mb-4"
              fluid={frontmatter.cover.childImageSharp.fluid}
            />
            <div className="flex flex-col flex-wrap px-2 sm:flex-row sm:items-center sm:px-0">
              <h2 className="mb-2 leading-none sm:mb-4">{frontmatter.title}</h2>

              <div className="w-full sm:flex">
                <p className="text-sm">{frontmatter.date}</p>
                <ul className="flex flex-wrap space-x-2 sm:ml-auto">
                  {frontmatter.tags.map(item => {
                    return (
                      <li key={item} className="text-sm">
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
          className="max-w-xl mx-auto article-styles"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* Maybe a link to the next article */}
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
        date(formatString: "DD/MM/YYY")
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
export default BlogTemplate
