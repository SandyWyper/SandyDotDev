import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import useScrollPosition from "../lib/useScrollPosition"
import { useSpring, animated } from "react-spring"

const ReturnToTopArrow = () => {
  const [isShown, setIsShown] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const reveal = currPos.y < -1000
      if (reveal !== isShown) setIsShown(reveal)
    },
    [isShown]
  )

  const appearSpring = useSpring({
    marginBottom: isShown ? "2rem" : "-3rem",
  })

  return (
    <animated.svg
      style={appearSpring}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fixed bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-4 cursor-pointer fill-current text`}
      onClick={() => scrollTo("#wrapper")}
    >
      <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" />
    </animated.svg>
  )
}

export default ReturnToTopArrow
