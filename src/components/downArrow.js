import React, { useState } from "react"
import { Spring } from "react-spring/renderprops"
import useScrollPosition from "../lib/useScrollPosition"
import scrollTo from "gatsby-plugin-smoothscroll"

const DownArrow = () => {
  const [isShown, setIsShown] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const show = currPos.y > -350
      if (show !== isShown) setIsShown(show)
    },
    [isShown],
    undefined,
    undefined,
    400
  )
  const handleKeyDown = ({ key }) => {
    switch (key) {
      case "Enter":
        scrollTo("#latest-project")
        break
      default:
    }
  }
  return (
    <div className="relative w-full max-w-2xl">
      <Spring
        from={{ opacity: 0, bottom: 20, position: "absolute" }}
        to={{
          opacity: isShown ? 1 : 0,
          bottom: -30,
          position: "absolute",
          right: 0,
          left: 0,
        }}
        config={{ tension: 100, friction: 30, mass: 4, delay: 5000 }}
      >
        {props => (
          <div
            style={props}
            onKeyDown={handleKeyDown}
            onClick={() => scrollTo("#latest-project")}
            className="cursor-pointer focus:outline-none"
            role="button"
            tabIndex="0"
          >
            <svg
              className="w-10 h-10 mx-auto fill-current text"
              viewBox="0 0 490.688 490.688"
            >
              <g>
                <path
                  d="M472.328,216.529L245.213,443.665L18.098,216.529c-4.237-4.093-10.99-3.975-15.083,0.262
                c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
                c4.093-4.237,3.975-10.99-0.262-15.083c-4.134-3.993-10.687-3.993-14.821,0L472.328,216.529z"
                />
                <path
                  d="M472.328,24.529L245.213,251.665L18.098,24.529c-4.237-4.093-10.99-3.975-15.083,0.262
                c-3.992,4.134-3.992,10.687,0,14.821l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0L487.432,39.612
                c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
                L472.328,24.529z"
                />
              </g>
              <path
                d="M245.213,469.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,231.633c-4.093-4.237-3.975-10.99,0.262-15.083
              c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.237-4.093,10.99-3.975,15.083,0.262
              c3.993,4.134,3.993,10.687,0,14.821L252.744,466.279C250.748,468.28,248.04,469.408,245.213,469.415z"
              />
              <path
                d="M245.213,277.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,39.633c-4.093-4.237-3.975-10.99,0.262-15.083
              c4.134-3.992,10.687-3.992,14.821,0l227.136,227.115L472.328,24.529c4.093-4.237,10.845-4.354,15.083-0.262
              s4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,274.279C250.748,276.28,248.04,277.408,245.213,277.415z"
              />
            </svg>
          </div>
        )}
      </Spring>
    </div>
  )
}
export default DownArrow
