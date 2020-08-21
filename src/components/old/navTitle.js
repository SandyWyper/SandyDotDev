import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"

const NavTitle = props => {
  const [activeTitle, setActiveTitle] = useState(null)

  useEffect(() => {
    setActiveTitle(props.title)
  }, [props.title])

  const projectSpring = useSpring({
    immediate: false,
    from: {
      transform: `perspective(200px) rotateX(180deg)`,
      opacity: 0,
      marginTop: "-200px",
    },
    opacity: activeTitle === "projects" ? 1 : 0,
    transform: `perspective(200px) rotateX(${
      activeTitle === "projects" ? 0 : 180
    }deg)`,
    marginTop: activeTitle === "projects" ? "0px" : "-200px",
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const blogSpring = useSpring({
    immediate: false,
    from: {
      transform: `perspective(200px) rotateX(180deg)`,
      opacity: 0,
      marginTop: "-200px",
    },
    opacity: activeTitle === "blog" ? 1 : 0,
    marginTop: activeTitle === "blog" ? "0px" : "-200px",
    transform: `perspective(200px) rotateX(${
      activeTitle === "blog" ? 0 : 180
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const contactSpring = useSpring({
    immediate: false,
    from: {
      transform: `perspective(200px) rotateX(180deg)`,
      opacity: 0,
      marginTop: "-200px",
    },
    opacity: activeTitle === "contact" ? 1 : 0,
    transform: `perspective(200px) rotateX(${
      activeTitle === "contact" ? 0 : 180
    }deg)`,
    marginTop: activeTitle === "contact" ? "0px" : "-200px",
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
