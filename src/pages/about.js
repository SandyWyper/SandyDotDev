import React from "react"
import { withStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import Tooltip from "@material-ui/core/Tooltip"
import Zoom from "@material-ui/core/Zoom"

import glasgowPhoto from "../images/glasgow2.jpg"
import myPhoto from "../images/me_PORTRAIT.jpg"
import architecturePhoto from "../images/architecture.jpg"
import lifeguardPhoto from "../images/lifeguard.jpg"
import surfingPhoto from "../images/surfing-spiderman2.jpg"
import divingPhoto from "../images/diving.jpg"
import golfingPhoto from "../images/golfing.jpg"

const About = props => {
  const PictureToolTip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "var(--text)",
      maxWidth: 300,
      border: "1px solid var(--text)",
    },
  }))(Tooltip)

  return (
    <>
      <SEO
        title="About"
        description="About me, skills and interests."
        path={props.path}
        image={myPhoto}
        imageAlt="A photo of me - avec barbe"
      />
      <section className="md:grid md:grid-cols-5 xl:grid-cols-4 background nav-space">
        <div className="pt-6 pb-12 lg:mr-10 xl:mr-24 md:col-start-3 md:col-end-6 xl:col-start-2 xl:col-end-5 md:pr-4">
          <div className="max-w-4xl pb-40 mx-auto md:px-0">
            <h1 className="section-title">Hi!</h1>
            <div className="px-4">
              <h4 className="mb-4">Back story</h4>
              <p className="inline-block pl-4 mb-6">
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img src={myPhoto} alt="Me" />
                    </div>
                  }
                >
                  <span>I</span>
                </PictureToolTip>
                &nbsp;grew up in&nbsp;
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img src={glasgowPhoto} alt="Glasgow" />
                    </div>
                  }
                >
                  <span>Glagow</span>
                </PictureToolTip>
                , graduated with a degree in&nbsp;
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img
                        src={architecturePhoto}
                        alt="architectural section"
                      />
                    </div>
                  }
                >
                  <span>architecture&nbsp;</span>
                </PictureToolTip>
                from the University of Dundee, and after working in various
                places and jobs moved permenantly to Cornwall. I was lucky
                enough to get a job working for the RNLI as a&nbsp;
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img src={lifeguardPhoto} alt="working on the beach" />
                    </div>
                  }
                >
                  <span>beach&nbsp;lifeguard&nbsp;</span>
                </PictureToolTip>
                which I did for eight years. It was a privilage and an amazing
                job, but when I started learning to code, I knew I was ready for
                a new challenge.
              </p>
              <h4 className="mb-4">Skills</h4>
              <p className="pl-4 mb-4">
                Solid understanding of all things front-end, with excellent
                knowledge of the fundimentals. Currently building lightning fast
                sites with Gatsby, and whatever headless CMS is called for. I
                also have inside-out knowldge of Liquid, a PHP based framework,
                having previously worked for LinedUp, Shopify Experts. Here's a
                list of strings to my bow:
              </p>
              <ul className="pl-12 mb-4 list-disc md:pl-24">
                <li>JavaScript, React, Redux, Jquery, ES6</li>
                <li>HTML, CSS, SCSS, Bootstrap, Tailwind</li>
                <li>Shopify: Liquid themes, JavaScript SDK</li>
                <li>Gatsby, Webpack, NPM, AWS, Netlify, Heroku</li>
              </ul>
              <p className="pl-4 mb-4">
                Please take a look through my side projects, or have a look at
                the repo for this site{" "}
                <a
                  href="https://github.com/SandyWyper/SandyDotDev"
                  target="_blank"
                  rel="noreferrer"
                  className="link-out"
                >
                  here.
                </a>
              </p>
              <p className="pl-4 mb-6">
                In my latest side project I have been delving into the world of
                Serverless architecture, it uses AWS Lambda functions with the
                API Gateway to build routes that uses MongoDB Atlas. This
                coupled with a statically generated front-end should result in a
                fast and scalable web app.
              </p>
              <h4 className="mb-4">Interests</h4>
              <p className="pl-4 mb-4">
                I enjoy
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img src={surfingPhoto} alt="Surfing spiderman" />
                    </div>
                  }
                >
                  <span>&nbsp;surfing</span>
                </PictureToolTip>
                , swiming,&nbsp;
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img src={divingPhoto} alt="free diving" />
                    </div>
                  }
                >
                  <span>free&nbsp;diving&nbsp;</span>
                </PictureToolTip>
                and everything in or on the sea. I am also a keen&nbsp;
                <PictureToolTip
                  className="inline-block photo-tip"
                  arrow
                  TransitionComponent={Zoom}
                  title={
                    <div>
                      <img src={golfingPhoto} alt="golfing" />
                    </div>
                  }
                >
                  <span>golfer&nbsp;</span>
                </PictureToolTip>
                and member of Newquay Golf Club.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
