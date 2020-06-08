import React, { useState, useEffect } from "react"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      console.log("open")
      document.body.classList.add("nav-open")
    } else {
      console.log("close")
      document.body.classList.remove("nav-open")
    }
  }, [isOpen])

  return (
    <div className="">
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
        className={`bg-gray-800 bg-opacity-75 fixed h-screen w-screen z-69 overflow-hidden top-0 left-0  ${
          !isOpen && "hidden"
        }`}
      ></div>
    </div>
  )
}

export default MobileNav
