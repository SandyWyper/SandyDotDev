import React from "react"
import { ThemeContext } from "./darkThemeContext"
import Moon from "./moon"
import PropTypes from "prop-types"

const DarkToggle = props => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toogleA"
          type="checkbox"
          checked={colorMode === "dark"}
          onChange={ev => {
            setColorMode(ev.target.checked ? "dark" : "light")
          }}
          className="hidden"
        />

        <div
          className={`w-10 h-4 rounded-full shadow-inner toggle__line ${
            props.mobileNav ? "mobile-nav-dark-toggle" : "background"
          }`}
        ></div>

        <div
          className={`absolute inset-y-0 left-0 w-6 h-6 p-1 rounded-full shadow toggle__dot background-text text-contrast ${
            props.mobileNav && "border-2 border-text-contrast"
          }`}
        >
          <Moon />
        </div>
      </div>

      {/* <div className="ml-3 font-medium text-gray-700"></div> */}
    </label>
  )
}

DarkToggle.propTypes = {
  mobileNav: PropTypes.bool,
}
export default DarkToggle
