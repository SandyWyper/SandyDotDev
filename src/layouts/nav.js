import React, { useState, useRef, useLayoutEffect, useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import DarkToggle from "../components/darkModeToggle"
import useScrollPosition from "../lib/useScrollPosition"
import { useSpring, animated } from "react-spring"
import MobileNav from "./mobileNav"
import { getWidth } from "../lib/getWidth"
import LinkedInLink from "../components/linkedInLink"
import GitHubLink from "../components/gitHubLink"
import { Spring } from "react-spring/renderprops"
import { ThemeContext } from "../layouts/darkThemeContext"

const Panel = ({ children, path }) => {
  const ref = useRef(null)
  const [height, setFullHeight] = useState(0)
  useLayoutEffect(() => {
    console.log(ref.current.clientHeight, ref.current)
    setFullHeight(ref.current.clientHeight)
  }, [])

  const spring = useSpring({
    from: {
      height: path === "/" ? 0 : "auto",
      overflow: "hidden",
    },
    // had to add an extra 35 for some unknown reason
    to: { height: height + 35, overflow: "hidden" },
    delay: 3000,
    config: { mass: 40, tension: 280, friction: 160, precision: 1 },
  })

  return (
    <animated.div
      ref={ref}
      style={{
        overflow: "hidden",
        height: !ref.current ? "auto" : spring.height,
      }}
    >
      {children}
    </animated.div>
  )
}

const Nav = ({ path }) => {
  // to determine what background color to use in nav
  const { colorMode } = useContext(ThemeContext)
  // for mobile nav hide and show
  const [isShown, setIsShown] = useState(true)

  // use scroll position to determine whether to show mobile nav
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isMobile = getWidth() < 756
      const show = currPos.y > -60 || currPos.y > prevPos.y
      if ((show !== isShown) & isMobile) setIsShown(show)
    },
    [isShown],
    undefined,
    undefined,
    100
  )

  const showMobileNavSpring = useSpring({
    marginTop: isShown ? "0rem" : "-4rem",
    config: { mass: 1, tension: 200, friction: 30 },
  })

  const homeTitleSpring = useSpring({
    from: {
      boxShadow: "0px 0px 0px 0px var(--text)",
      border: "0px solid var(--text)",
      backgroundColor: colorMode === "light" ? "#ffffff00" : "#ffffff00",
    },
    to: {
      backgroundColor: colorMode !== "dark" ? "#99e1d9" : "#186a70",
      boxShadow: "-10px 10px 0px 0px var(--text)",
      border: "1px solid var(--text)",
    },
    config: { mass: 20, tension: 280, friction: 160, clamp: true },
    delay: 3000,
  })

  const otherTitleSpring = useSpring({
    from: {
      boxShadow: "0px 0px 0px 0px var(--text)",
      border: "0px solid var(--text)",
      backgroundColor: colorMode === "light" ? "#00000000" : "#00000000",
    },
    to: {
      backgroundColor: colorMode !== "light" ? "#186a70" : "#99e1d9",
      boxShadow: "-10px 10px 0px 0px var(--text)",
      border: "1px solid var(--text)",
    },
    config: { mass: 1, tension: 200, friction: 30 },
  })

  // for animating the title SVG
  const offset = 31780.61

  const data = useStaticQuery(graphql`
    query posts {
      projects: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/projects/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 2
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
        limit: 2
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
    <animated.nav
      style={showMobileNavSpring}
      className="fixed inset-x-0 z-30 w-full nav background-prmary "
    >
      <div className="relative md:hidden">
        <Link to="/">
          <Spring
            from={{ x: offset }}
            to={{ x: 0 }}
            config={{
              tension: 1,
              clamp: true,
              friction: 200,
              precision: 0.1,
              delay: 600,
              mass: 20,
            }}
          >
            {props => (
              <svg
                className="w-56 ml-4 site-title"
                viewBox="0 -5 540 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="var(--text)"
                  fill="transparent"
                  strokeDashoffset={props.x}
                  strokeDasharray={offset}
                  strokeWidth="3.7"
                  d="M2.942 17.097C2.942 11.3417 4.39567 7.18833 7.303 4.637C10.2103 2.08566 14.9273 0.809997 21.454 0.809997C26.0227 0.809997 29.7013 1.99666 32.49 4.37C35.2787 6.74333 37.296 10.3627 38.542 15.228L30.265 21.458H25.904L35.516 14.249C34.27 10.2737 32.4603 7.485 30.087 5.88299C27.773 4.281 24.8953 3.48 21.454 3.48C19.0807 3.48 17.0633 3.62833 15.402 3.925C13.8 4.22167 12.1683 4.815 10.507 5.705C8.905 6.53566 7.68867 7.90033 6.858 9.799C6.02733 11.6977 5.612 14.1303 5.612 17.097C5.612 19.7077 6.79867 22.0217 9.172 24.039C11.6047 26.0563 14.5417 27.777 17.983 29.201C21.4243 30.625 24.8657 32.0787 28.307 33.562C31.8077 35.0453 34.7447 36.944 37.118 39.258C39.5507 41.572 40.767 44.242 40.767 47.268C40.767 53.2013 39.2837 57.6217 36.317 60.529C33.4097 63.4363 28.396 64.89 21.276 64.89C15.4613 64.89 10.8927 63.733 7.57 61.419C4.24733 59.0457 1.963 55.3967 0.717 50.472L3.209 49.404C4.39567 54.21 6.413 57.5623 9.261 59.461C12.1683 61.3003 16.1733 62.22 21.276 62.22C26.972 62.22 31.1847 61.1223 33.914 58.927C36.7027 56.7317 38.097 52.8453 38.097 47.268C38.097 44.6573 36.8807 42.3433 34.448 40.326C32.0747 38.3087 29.1377 36.588 25.637 35.164C22.1957 33.74 18.7543 32.2863 15.313 30.803C11.8717 29.3197 8.93467 27.421 6.502 25.107C4.12867 22.793 2.942 20.123 2.942 17.097ZM59.0607 61.33H88.0747L69.8297 18.343L50.4277 64H47.5797L69.8297 11.49L92.0797 64H59.0607V61.33ZM102.233 64V12.38H104.903L133.917 59.105V12.38H136.587V64H133.917L104.903 17.186V64H102.233ZM160.277 64H153.513V12.38H160.277C169.058 12.38 176.059 14.694 181.281 19.322C186.502 23.95 189.113 30.2393 189.113 38.19C189.113 46.1407 186.502 52.43 181.281 57.058C176.059 61.686 169.058 64 160.277 64ZM160.277 61.33C168.287 61.33 174.635 59.283 179.323 55.189C184.069 51.095 186.443 45.4287 186.443 38.19C186.443 30.9513 184.069 25.285 179.323 21.191C174.635 17.097 168.287 15.05 160.277 15.05H156.183V61.33H160.277ZM205.821 12.38H240.264L219.349 61.775V81.8H216.679V61.775L195.764 12.38H198.612L218.014 58.037L236.259 15.05H205.821V12.38ZM259.148 64H250.604V1.7H259.148C267.692 1.7 274.931 4.84466 280.864 11.134C286.797 17.4233 289.764 24.662 289.764 32.85C289.764 41.038 286.797 48.2767 280.864 54.566C274.931 60.8553 267.692 64 259.148 64ZM259.148 61.33C266.921 61.33 273.507 58.482 278.906 52.786C284.365 47.0307 287.094 40.3853 287.094 32.85C287.094 25.3147 284.365 18.699 278.906 13.003C273.507 7.24767 266.921 4.37 259.148 4.37H253.274V61.33H259.148ZM328.993 15.139C326.975 14.4863 324.483 14.16 321.517 14.16C318.55 14.16 316.058 14.4863 314.041 15.139C312.023 15.7323 310.154 16.8893 308.434 18.61C306.772 20.2713 305.526 22.7337 304.696 25.997C303.865 29.201 303.45 33.2653 303.45 38.19C303.45 43.1147 303.865 47.2087 304.696 50.472C305.526 53.676 306.772 56.1383 308.434 57.859C310.154 59.5203 312.023 60.6773 314.041 61.33C316.058 61.9233 318.55 62.22 321.517 62.22C324.483 62.22 326.975 61.9233 328.993 61.33C331.01 60.6773 332.849 59.5203 334.511 57.859C336.231 56.1383 337.507 53.676 338.338 50.472C339.168 47.2087 339.584 43.1147 339.584 38.19C339.584 33.2653 339.168 29.201 338.338 25.997C337.507 22.7337 336.231 20.2713 334.511 18.61C332.849 16.8893 331.01 15.7323 328.993 15.139ZM337.448 58.571C334.244 62.7837 328.933 64.89 321.517 64.89C314.1 64.89 308.79 62.7837 305.586 58.571C302.382 54.3583 300.78 47.5647 300.78 38.19C300.78 28.8153 302.382 22.0217 305.586 17.809C308.79 13.5963 314.1 11.49 321.517 11.49C328.933 11.49 334.244 13.5963 337.448 17.809C340.652 22.0217 342.254 28.8153 342.254 38.19C342.254 47.5647 340.652 54.3583 337.448 58.571ZM390.353 12.38V15.05H371.663V64H368.993V15.05H350.303V12.38H390.353ZM409.509 64H400.965V1.7H409.509C418.053 1.7 425.292 4.84466 431.225 11.134C437.159 17.4233 440.125 24.662 440.125 32.85C440.125 41.038 437.159 48.2767 431.225 54.566C425.292 60.8553 418.053 64 409.509 64ZM409.509 61.33C417.282 61.33 423.868 58.482 429.267 52.786C434.726 47.0307 437.455 40.3853 437.455 32.85C437.455 25.3147 434.726 18.699 429.267 13.003C423.868 7.24767 417.282 4.37 409.509 4.37H403.635V61.33H409.509ZM487.898 58.749C484.635 62.843 479.295 64.89 471.878 64.89C464.461 64.89 459.151 62.7837 455.947 58.571C452.743 54.3583 451.141 47.5647 451.141 38.19C451.141 28.8153 452.743 22.0217 455.947 17.809C459.151 13.5963 464.461 11.49 471.878 11.49C480.481 11.49 486.326 14.3083 489.411 19.945L467.606 38.19H463.423L485.94 19.411C483.329 15.9103 478.642 14.16 471.878 14.16C468.911 14.16 466.419 14.4863 464.402 15.139C462.385 15.7323 460.516 16.8893 458.795 18.61C457.134 20.2713 455.888 22.7337 455.057 25.997C454.226 29.201 453.811 33.2653 453.811 38.19C453.811 43.1147 454.226 47.2087 455.057 50.472C455.888 53.676 457.134 56.1383 458.795 57.859C460.516 59.5203 462.385 60.6773 464.402 61.33C466.419 61.9233 468.911 62.22 471.878 62.22C478.642 62.22 483.329 60.4697 485.94 56.969L487.898 58.749ZM539.772 12.38L517.522 64.89L495.272 12.38H498.12L517.522 58.037L536.924 12.38H539.772Z"
                />
              </svg>
            )}
          </Spring>
        </Link>
        <MobileNav data={data} />
      </div>
      <animated.div
        style={path === "/" ? homeTitleSpring : otherTitleSpring}
        className="container relative items-center hidden w-full md:flex md:flex-col nav-inner"
      >
        <Link to="/" className="ml-4 md:ml-0 background-prmary">
          <Spring
            from={{ x: offset }}
            to={{ x: 0 }}
            config={{
              tension: 1,
              clamp: true,
              friction: 200,
              precision: 0.1,
              delay: 600,
              mass: 20,
            }}
          >
            {props => (
              <svg
                className="w-56 site-title"
                viewBox="0 -5 540 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="white"
                  fill="transparent"
                  strokeDashoffset={props.x}
                  strokeDasharray={offset}
                  strokeWidth="3.7"
                  d="M2.942 17.097C2.942 11.3417 4.39567 7.18833 7.303 4.637C10.2103 2.08566 14.9273 0.809997 21.454 0.809997C26.0227 0.809997 29.7013 1.99666 32.49 4.37C35.2787 6.74333 37.296 10.3627 38.542 15.228L30.265 21.458H25.904L35.516 14.249C34.27 10.2737 32.4603 7.485 30.087 5.88299C27.773 4.281 24.8953 3.48 21.454 3.48C19.0807 3.48 17.0633 3.62833 15.402 3.925C13.8 4.22167 12.1683 4.815 10.507 5.705C8.905 6.53566 7.68867 7.90033 6.858 9.799C6.02733 11.6977 5.612 14.1303 5.612 17.097C5.612 19.7077 6.79867 22.0217 9.172 24.039C11.6047 26.0563 14.5417 27.777 17.983 29.201C21.4243 30.625 24.8657 32.0787 28.307 33.562C31.8077 35.0453 34.7447 36.944 37.118 39.258C39.5507 41.572 40.767 44.242 40.767 47.268C40.767 53.2013 39.2837 57.6217 36.317 60.529C33.4097 63.4363 28.396 64.89 21.276 64.89C15.4613 64.89 10.8927 63.733 7.57 61.419C4.24733 59.0457 1.963 55.3967 0.717 50.472L3.209 49.404C4.39567 54.21 6.413 57.5623 9.261 59.461C12.1683 61.3003 16.1733 62.22 21.276 62.22C26.972 62.22 31.1847 61.1223 33.914 58.927C36.7027 56.7317 38.097 52.8453 38.097 47.268C38.097 44.6573 36.8807 42.3433 34.448 40.326C32.0747 38.3087 29.1377 36.588 25.637 35.164C22.1957 33.74 18.7543 32.2863 15.313 30.803C11.8717 29.3197 8.93467 27.421 6.502 25.107C4.12867 22.793 2.942 20.123 2.942 17.097ZM59.0607 61.33H88.0747L69.8297 18.343L50.4277 64H47.5797L69.8297 11.49L92.0797 64H59.0607V61.33ZM102.233 64V12.38H104.903L133.917 59.105V12.38H136.587V64H133.917L104.903 17.186V64H102.233ZM160.277 64H153.513V12.38H160.277C169.058 12.38 176.059 14.694 181.281 19.322C186.502 23.95 189.113 30.2393 189.113 38.19C189.113 46.1407 186.502 52.43 181.281 57.058C176.059 61.686 169.058 64 160.277 64ZM160.277 61.33C168.287 61.33 174.635 59.283 179.323 55.189C184.069 51.095 186.443 45.4287 186.443 38.19C186.443 30.9513 184.069 25.285 179.323 21.191C174.635 17.097 168.287 15.05 160.277 15.05H156.183V61.33H160.277ZM205.821 12.38H240.264L219.349 61.775V81.8H216.679V61.775L195.764 12.38H198.612L218.014 58.037L236.259 15.05H205.821V12.38ZM259.148 64H250.604V1.7H259.148C267.692 1.7 274.931 4.84466 280.864 11.134C286.797 17.4233 289.764 24.662 289.764 32.85C289.764 41.038 286.797 48.2767 280.864 54.566C274.931 60.8553 267.692 64 259.148 64ZM259.148 61.33C266.921 61.33 273.507 58.482 278.906 52.786C284.365 47.0307 287.094 40.3853 287.094 32.85C287.094 25.3147 284.365 18.699 278.906 13.003C273.507 7.24767 266.921 4.37 259.148 4.37H253.274V61.33H259.148ZM328.993 15.139C326.975 14.4863 324.483 14.16 321.517 14.16C318.55 14.16 316.058 14.4863 314.041 15.139C312.023 15.7323 310.154 16.8893 308.434 18.61C306.772 20.2713 305.526 22.7337 304.696 25.997C303.865 29.201 303.45 33.2653 303.45 38.19C303.45 43.1147 303.865 47.2087 304.696 50.472C305.526 53.676 306.772 56.1383 308.434 57.859C310.154 59.5203 312.023 60.6773 314.041 61.33C316.058 61.9233 318.55 62.22 321.517 62.22C324.483 62.22 326.975 61.9233 328.993 61.33C331.01 60.6773 332.849 59.5203 334.511 57.859C336.231 56.1383 337.507 53.676 338.338 50.472C339.168 47.2087 339.584 43.1147 339.584 38.19C339.584 33.2653 339.168 29.201 338.338 25.997C337.507 22.7337 336.231 20.2713 334.511 18.61C332.849 16.8893 331.01 15.7323 328.993 15.139ZM337.448 58.571C334.244 62.7837 328.933 64.89 321.517 64.89C314.1 64.89 308.79 62.7837 305.586 58.571C302.382 54.3583 300.78 47.5647 300.78 38.19C300.78 28.8153 302.382 22.0217 305.586 17.809C308.79 13.5963 314.1 11.49 321.517 11.49C328.933 11.49 334.244 13.5963 337.448 17.809C340.652 22.0217 342.254 28.8153 342.254 38.19C342.254 47.5647 340.652 54.3583 337.448 58.571ZM390.353 12.38V15.05H371.663V64H368.993V15.05H350.303V12.38H390.353ZM409.509 64H400.965V1.7H409.509C418.053 1.7 425.292 4.84466 431.225 11.134C437.159 17.4233 440.125 24.662 440.125 32.85C440.125 41.038 437.159 48.2767 431.225 54.566C425.292 60.8553 418.053 64 409.509 64ZM409.509 61.33C417.282 61.33 423.868 58.482 429.267 52.786C434.726 47.0307 437.455 40.3853 437.455 32.85C437.455 25.3147 434.726 18.699 429.267 13.003C423.868 7.24767 417.282 4.37 409.509 4.37H403.635V61.33H409.509ZM487.898 58.749C484.635 62.843 479.295 64.89 471.878 64.89C464.461 64.89 459.151 62.7837 455.947 58.571C452.743 54.3583 451.141 47.5647 451.141 38.19C451.141 28.8153 452.743 22.0217 455.947 17.809C459.151 13.5963 464.461 11.49 471.878 11.49C480.481 11.49 486.326 14.3083 489.411 19.945L467.606 38.19H463.423L485.94 19.411C483.329 15.9103 478.642 14.16 471.878 14.16C468.911 14.16 466.419 14.4863 464.402 15.139C462.385 15.7323 460.516 16.8893 458.795 18.61C457.134 20.2713 455.888 22.7337 455.057 25.997C454.226 29.201 453.811 33.2653 453.811 38.19C453.811 43.1147 454.226 47.2087 455.057 50.472C455.888 53.676 457.134 56.1383 458.795 57.859C460.516 59.5203 462.385 60.6773 464.402 61.33C466.419 61.9233 468.911 62.22 471.878 62.22C478.642 62.22 483.329 60.4697 485.94 56.969L487.898 58.749ZM539.772 12.38L517.522 64.89L495.272 12.38H498.12L517.522 58.037L536.924 12.38H539.772Z"
                />
              </svg>
            )}
          </Spring>
        </Link>
        <div className="hidden md:block">
          <Panel path={path}>
            <div className="container flex flex-col items-center">
              <ul className="background side-nav">
                <li>
                  <Link
                    to="/projects"
                    className="nav-section-header"
                    activeClassName="active"
                    partiallyActive={true}
                  >
                    Projects
                  </Link>
                </li>
                {data.projects.edges.map(post => (
                  <li className="post" key={post.node.id}>
                    <Link
                      to={post.node.fields.slug}
                      activeClassName="font-bold"
                    >
                      {post.node.frontmatter.title}
                    </Link>
                  </li>
                ))}
                <li className="post">
                  <Link to="/projects">more ...</Link>
                </li>
                <li className="mt-4">
                  <Link
                    to="/blog"
                    className="nav-section-header"
                    activeClassName="active"
                    partiallyActive={true}
                  >
                    Blog
                  </Link>
                </li>
                {data.blog.edges.map(post => (
                  <li className="post" key={post.node.id}>
                    <Link
                      to={post.node.fields.slug}
                      activeClassName="font-bold"
                    >
                      {post.node.frontmatter.title}
                    </Link>
                  </li>
                ))}
                <li className="post ">
                  <Link to="/blog">more ...</Link>
                </li>
                <li className="mt-4">
                  <Link
                    to="/contact"
                    className="nav-section-header"
                    activeClassName="active"
                    partiallyActive={true}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="items-center justify-around hidden w-full p-4 md:flex">
                <div className="w-6">
                  <DarkToggle mobileNav={false} />
                </div>
                <div className="w-6 scale-hover-2">
                  <LinkedInLink />
                </div>
                <div className="w-6 scale-hover-2">
                  <GitHubLink />
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </animated.div>
    </animated.nav>
  )
}

Nav.propTypes = {
  title: PropTypes.string,
}

export default Nav
