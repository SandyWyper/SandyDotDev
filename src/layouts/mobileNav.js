import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import DarkToggle from "../components/darkModeToggle"
import PropTypes from "prop-types"

const MobileNav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case "Escape":
        toggle()
        break
      default:
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open")
    } else {
      document.body.classList.remove("nav-open")
    }
  }, [isOpen])

  const spring = useSpring({
    to: {
      opacity: !isOpen ? 0 : 1,
      width: !isOpen ? "0%" : "100%",
      height: !isOpen ? "0%" : "100%",
    },
  })

  return (
    <div className="absolute top-0 right-0 mt-1 md:hidden">
      <button
        onClick={toggle}
        className={`hamburger hamburger--collapse xl:hidden relative ${
          isOpen && "is-active"
        }`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <animated.div
        className="fixed top-0 right-0 overflow-hidden background-contrast z-69"
        style={spring}
      >
        <div className="relative flex flex-col justify-center w-screen h-screen p-10 text-contrast">
          <div className="max-w-md mx-auto">
            {isOpen && (
              <div className="absolute top-0 left-0 mt-8 ml-8">
                <DarkToggle mobileNav={true} />
              </div>
            )}
            <ul className="flex justify-around px-8 mb-8">
              <li className="w-8 h-8 text-primary">
                <Link to="/" onClick={toggle} onKeyDown={handleKeyDown}>
                  <svg className="fill-current" viewBox="0 0 63.699 63.699">
                    <g>
                      <path
                        d="M63.663,29.424c-0.143-1.093-0.701-2.065-1.575-2.737l-11.715-9.021V8.608c0-2.275-1.851-4.126-4.125-4.126
                      c-2.273,0-4.125,1.851-4.125,4.126v2.705l-7.758-5.975c-0.718-0.551-1.612-0.856-2.517-0.856c-0.906,0-1.801,0.304-2.519,0.857
                      L1.606,26.687c-1.802,1.389-2.139,3.983-0.751,5.785c0.788,1.022,1.979,1.608,3.271,1.608c0.664,0,1.302-0.153,1.88-0.451V55.09
                      c0,2.275,1.851,4.127,4.126,4.127h18.534V39.732h6.351v19.482h18.271c2.274,0,4.125-1.85,4.125-4.127V33.472
                      c0.649,0.399,1.387,0.608,2.157,0.608c1.289,0,2.482-0.586,3.27-1.606C63.514,31.601,63.807,30.518,63.663,29.424z M59.819,30.144
                      c-0.08,0.105-0.189,0.122-0.247,0.122c-0.069,0-0.132-0.021-0.188-0.065L53.6,25.748V55.09c0,0.173-0.14,0.312-0.311,0.312H38.832
                      l0.001-19.484H24.852v19.484H10.132c-0.171,0-0.31-0.141-0.31-0.312V25.96L4.315,30.2c-0.056,0.043-0.119,0.065-0.188,0.065
                      c-0.059,0-0.167-0.017-0.248-0.121c-0.065-0.084-0.07-0.171-0.062-0.229c0.007-0.058,0.034-0.141,0.118-0.205L31.661,8.363
                      c0.138-0.105,0.239-0.106,0.379,0l13.899,10.703V8.608c0-0.172,0.14-0.311,0.311-0.311s0.312,0.139,0.312,0.311v10.935
                      l13.205,10.166c0.084,0.064,0.108,0.147,0.116,0.205C59.891,29.975,59.885,30.062,59.819,30.144z"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className="w-8 h-8">
                <a
                  href="https://www.linkedin.com/in/sandy-wyper-6507611a7/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={toggle}
                  onKeyDown={handleKeyDown}
                >
                  <svg
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
              <li className="w-8 h-8">
                <a
                  href="https://github.com/SandyWyper"
                  target="_blank"
                  rel="noreferrer"
                  onClick={toggle}
                  onKeyDown={handleKeyDown}
                >
                  <svg
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul>
              <li className="pt-1 text-3xl text-primary">
                <Link to="/about" onClick={toggle} onKeyDown={handleKeyDown}>
                  About me
                </Link>
              </li>
              <li className="pt-1 text-3xl text-primary">
                <Link to="/contact" onClick={toggle} onKeyDown={handleKeyDown}>
                  Contact
                </Link>
              </li>
              <li className="pt-1 text-3xl text-primary">
                <Link to="/projects" onClick={toggle} onKeyDown={handleKeyDown}>
                  Projects
                </Link>
              </li>
              {data.projects.edges.map(post => (
                <li className="post" key={post.node.id}>
                  <Link
                    to={post.node.fields.slug}
                    onClick={toggle}
                    onKeyDown={handleKeyDown}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              ))}
              <li className="post">
                <Link to="/projects" onClick={toggle} onKeyDown={handleKeyDown}>
                  more ...
                </Link>
              </li>
              <li className="pt-1 text-3xl text-primary">
                <Link to="/blog" onClick={toggle} onKeyDown={handleKeyDown}>
                  Blog
                </Link>
              </li>
              {data.blog.edges.map(post => (
                <li className="post" key={post.node.id}>
                  <Link
                    to={post.node.fields.slug}
                    onClick={toggle}
                    onKeyDown={handleKeyDown}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              ))}
              <li className="post">
                <Link to="/blog" onClick={toggle} onKeyDown={handleKeyDown}>
                  more ...
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </animated.div>
    </div>
  )
}
MobileNav.propTypes = {
  data: PropTypes.object.isRequired,
}
export default MobileNav
