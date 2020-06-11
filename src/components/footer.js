import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-grad-4 bg-custom-blue text-custom-gray">
      <div className="container mx-auto">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}
export default Footer
