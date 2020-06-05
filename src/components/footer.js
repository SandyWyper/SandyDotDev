import React from "react"

const Footer = () => {
  return (
    <footer className="container mx-auto">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
export default Footer
