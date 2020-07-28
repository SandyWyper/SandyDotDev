import React from "react"

const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 border-t border-grad-4 background-primary text">
      <div className="container mx-auto">
        <div className="flex justify-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
