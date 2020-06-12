import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-grad-4 bg-custom-blue text-custom-gray">
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
