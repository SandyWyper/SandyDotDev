import React, { useState, useEffect } from "react"
import HomeLinkIcon from "./homeLinkIcon"
import { useStaticQuery, graphql, Link } from "gatsby"
import LinkedInLink from "./linkedInLink"
import GitHubLink from "./gitHubLink"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open")
    } else {
      document.body.classList.remove("nav-open")
    }
  }, [isOpen])

  const data = useStaticQuery(graphql`
    query posts {
      projects: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/projects/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
            id
          }
        }
      }

      blog: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)

  return (
    <div className="absolute top-0 right-0 md:hidden">
      <button
        onClick={toggle}
        className={`hamburger hamburger--collapse md:hidden relative ${
          isOpen && "is-active"
        }`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div
        className={`bg-gray-900 fixed z-69 overflow-hidden top-0 left-0 ${
          !isOpen ? "w-0 h-0" : "bg-opacity-95 h-screen w-screen"
        }`}
      >
        <div className="relative w-screen h-screen p-10 text-white">
          <ul className="">
            <li className="w-8 h-8" onClick={toggle}>
              <LinkedInLink />
            </li>
            <li className="w-8 h-8" onClick={toggle}>
              <GitHubLink />
            </li>
            <li className="w-8 h-8" onClick={toggle}>
              <HomeLinkIcon />
            </li>
          </ul>
          <ul>
            <li className="">
              <Link to="/projects" onClick={toggle}>
                Projects
              </Link>
            </li>
            {data.projects.edges.map(post => (
              <li className="post" key={post.node.id}>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li className="">
              <Link to="/blog">Blog</Link>
            </li>
            {data.blog.edges.map(post => (
              <li className="post" key={post.node.id}>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li className="">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
