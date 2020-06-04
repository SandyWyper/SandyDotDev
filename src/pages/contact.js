import React from "react"
import Layout from "../components/layout"

export default function Contact(props) {
  return (
    <Layout path={props.path}>
      <section className="container mx-auto">
        <h1 className="mb-6">Contact</h1>
        <form
          className="w-full max-w-md px-4"
          method="post"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" value="contact" />

          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 md:text-right md:mb-0"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 leading-tight bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-green-600"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                htmlFor="email"
                className="block pr-4 mb-1 md:text-right md:mb-0"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="email"
                id="email"
                className="w-full px-4 py-2 leading-tight bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-green-600"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 md:text-right md:mb-0"
                htmlFor="message"
              >
                Message
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full px-4 py-2 leading-tight bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-green-600"
              ></textarea>
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="mb-4 md:mb-0 md:mr-2 md:w-1/3">
              <input
                type="submit"
                value="Send Message"
                className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded shadow hover:bg-green-600 hover:bg-opacity-75 focus:shadow-outline focus:outline-none"
              />
            </div>
            <div className="md:ml-2 md:w-1/3">
              <input
                type="reset"
                value="Reset"
                className="w-full px-4 py-2 font-bold text-green-600 bg-gray-200 rounded shadow hover:opacity-75 focus:shadow-outline focus:outline-none"
              />
            </div>
          </div>
        </form>
        <ul className="">
          <li>
            <a
              href="https://www.linkedin.com/in/sandy-wyper-6507611a7/"
              className="icon fa-linkedin-square"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sandypants4life/"
              className="icon fa-instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SandyWyper"
              className="icon fa-github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
