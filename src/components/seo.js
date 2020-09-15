import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  image,
  imageAlt,
  type,
  path,
  robots,
}) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            author
            defaultUrl: siteUrl
          }
        }
        file(relativePath: { eq: "SandyDotDev-Cover-Image.jpg" }) {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
    `
  )

  const defaultImage = file.childImageSharp.resize.src
  const {
    defaultDescription,
    defaultUrl,
    defaultTitle,
    author,
  } = site.siteMetadata

  const metaDescription = description || defaultDescription
  const metaImage = image
    ? `${defaultUrl}${image}`
    : `${defaultUrl}${defaultImage}`
  const metaImageAlt = imageAlt || defaultTitle
  const metaUrl = path ? `${defaultUrl}${path}` : defaultUrl
  const metaRobots = robots ? robots : "all"
  const metaType = type ? type : `website`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title} | ${defaultTitle}`}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: `${title} | ${defaultTitle}` },
        { property: `og:description`, content: metaDescription },
        { property: `og:image`, content: metaImage },
        { name: "og:image:alt", content: metaImageAlt },
        { property: `og:type`, content: metaType },
        { property: `og:url`, content: metaUrl },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: author },
        { name: `twitter:title`, content: title },
        { name: "twitter:image:alt", content: metaImageAlt },
        { name: `twitter:description`, content: metaDescription },
        {
          name: "google-site-verification",
          content: "nN6fZk1iiqrLs0nlBQawSgtSjeTbE5wzU0_pn54wyvw",
        },
        { name: "robots", content: metaRobots },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  type: PropTypes.string,
  path: PropTypes.string,
  robots: PropTypes.string,
}

export default SEO
