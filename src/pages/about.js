import React from "react"
import SEO from "../components/seo"

const About = () => {
  return (
    <>
      <SEO title="About" description="About me, skills and interests." />
      <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
        <div className="py-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
          <div className="max-w-3xl px-4 pb-40 mx-auto md:px-0">
            <h1 className="section-title">Hi!</h1>
            <h5 className="mb-4">Back story:</h5>
            <p className="pl-4 mb-4">
              I grew up in Glagow, graduated with a degree in architecture from
              the University of Dundee, and after working in various places and
              jobs moved permenantly to Cornwall. I was lucky enough to get a
              job working for the RNLI as a beach lifeguard which I did for
              eight years. It was a privilage and an amazing job, but when I
              started learning to code, I knew I was ready for a new challenge.
            </p>
            <h5 className="mb-4">Skills:</h5>
            <p className="pl-4 mb-4">
              Solid understanding of all things front-end, with excellent
              knowledge of the fundimentals. Currently building lightning fast
              sites with Gatsby, and whatever headless CMS is called for. I also
              have inside-out knowldge of Liquid, a PHP based framework, having
              previously worked for LinedUp, Shopify Experts.
            </p>
            <ul className="pl-24 mb-4 list-disc">
              <li>JavaScript, React, Redux, Jquery, ES6</li>
              <li>HTML, CSS, SCSS, Bootstrap, Tailwind</li>
              <li>Shopify: Liquid themes, JavaScript SDK</li>
              <li>Gatsby, Webpack, NPM, AWS, Netlify, Heroku</li>
            </ul>
            <p className="pl-4 mb-4">
              In my latest side project I have been delving into the world of
              Serverless architecture, it uses AWS Lambda functions with the API
              Gateway to build routes that uses MongoDB Atlas. This coupled with
              a statically generated front-end should result in a fast and
              scalable web app.
            </p>
            <h5 className="mb-4">Interests</h5>
            <p className="pl-4 mb-4">
              I enjoy surfing, swiming, free diving and everything in or on the
              sea. I am also a keen golfer and member of Newquay Golf Club.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
