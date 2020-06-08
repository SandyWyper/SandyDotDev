import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"

const NavTitle = props => {
  const [activeTitle, updateActiveTitle] = useState("")

  useEffect(() => {
    updateActiveTitle(props.title)
  }, [props.title])

  const projectSpring = useSpring({
    opacity: activeTitle === "projects" ? 1 : 0,
    display: activeTitle === "projects" ? "block" : "none",
    transform: `perspective(200px) rotateX(${
      activeTitle !== "projects" ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const blogSpring = useSpring({
    opacity: activeTitle === "blog" ? 1 : 0,
    display: activeTitle === "blog" ? "block" : "none",

    transform: `perspective(200px) rotateX(${
      activeTitle !== "blog" ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const contactSpring = useSpring({
    opacity: activeTitle === "contact" ? 1 : 0,
    display: activeTitle === "contact" ? "block" : "none",
    transform: `perspective(200px) rotateX(${
      activeTitle !== "contact" ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <>
      <animated.div className="nav-title" style={projectSpring}>
        <Link to="/projects" className="side">
          Projects
        </Link>
      </animated.div>
      <animated.div className="nav-title" style={blogSpring}>
        <Link to="/blog">Blog</Link>
      </animated.div>
      <animated.div className="nav-title" style={contactSpring}>
        <Link to="/contact">Contact</Link>
      </animated.div>
    </>
  )
}

NavTitle.propTypes = {
  title: PropTypes.string,
}

export default NavTitle
