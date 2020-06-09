import React, { Component } from "react"
import { navigate } from "gatsby"
import LinkedInLink from "../components/linkedInLink"
import GitHubLink from "../components/gitHubLink"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...this.state }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <section className=" bg-custom-mono-1">
        <div className="container min-h-screen pt-12 mx-auto border-l border-r border-solid border-custom-mono-2 bg-custom-mono-1">
          <form
            className="w-full max-w-lg px-4"
            method="post"
            name="SandyDotDev-Contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            action="/thankyou/"
          >
            <input type="hidden" name="bot-field" value="SandyDotDev-Contact" />

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
                  className="w-full px-4 py-2 leading-tight bg-gray-300 border-2 rounded appearance-none border-custom-blue focus:outline-none focus:bg-gray-200 focus:border-custom-umber"
                  onChange={this.handleChange}
                  required
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
                  className="w-full px-4 py-2 leading-tight bg-gray-300 border-2 rounded appearance-none border-custom-blue focus:outline-none focus:bg-gray-200 focus:border-custom-umber"
                  onChange={this.handleChange}
                  required
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
                  className="w-full px-4 py-2 leading-tight bg-gray-300 border-2 rounded appearance-none border-custom-blue focus:outline-none focus:bg-gray-200 focus:border-custom-umber"
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="mb-4 md:mb-0 md:mr-2 md:w-1/3">
                <input
                  type="submit"
                  value="Send Message"
                  className="w-full px-4 py-2 font-bold rounded shadow cursor-pointer text-custom-gray bg-custom-blue hover:bg-grad-5 focus:shadow-outline focus:outline-none"
                />
              </div>
              <div className="md:ml-2 md:w-1/3">
                <input
                  type="reset"
                  value="Reset"
                  className="w-full px-4 py-2 font-bold rounded shadow cursor-pointer text-custom-blue bg-custom-gray hover:opacity-75 focus:shadow-outline focus:outline-none"
                />
              </div>
            </div>
          </form>
          <div className="flex w-full max-w-lg px-4">
            <div className="md:w-1/3" />
            <div className="flex justify-end w-full md:w-2/3">
              <div className="w-8 ml-4 scale-hover-2">
                <LinkedInLink />
              </div>
              <div className="w-8 ml-4 scale-hover-2">
                <GitHubLink />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
