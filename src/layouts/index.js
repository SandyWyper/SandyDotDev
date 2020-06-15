import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Footer from "../components/footer"
import TopNav from "../components/topNav"
import MobileNav from "../components/mobileNav"
import PropTypes from "prop-types"

const Layout = ({ pageContext, children, location }) => {
  return (
    <div className="relative overflow-hidden">
      <MobileNav />
      {pageContext.homeLayout ? (
        <TransitionProvider location={location}>
          <TransitionViews>{children}</TransitionViews>
        </TransitionProvider>
      ) : (
        <>
          <TopNav title={pageContext.navTitle} />
          <TransitionProvider
            location={location}
            mode="successive"
            enter={{
              opacity: 0,
            }}
            usual={{
              opacity: 1,
            }}
            leave={{
              opacity: 0,

              config: {
                duration: 100,
              },
            }}
          >
            <TransitionViews>{children}</TransitionViews>
          </TransitionProvider>
        </>
      )}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
export default Layout

// import React from "react"
// import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
// import Footer from "../components/footer"
// import TopNav from "../components/topNav"
// import MobileNav from "../components/mobileNav"
// import PropTypes from "prop-types"

// const Layout = ({ pageContext, children, location }) => {
//   if (pageContext.homeLayout) {
//     return (
//       <div className="relative overflow-hidden">
//         <MobileNav />
//         <TransitionProvider location={location}>
//           <TransitionViews>{children}</TransitionViews>
//         </TransitionProvider>
//         <Footer />
//       </div>
//     )
//   } else {
//     return (
//       <div className="relative overflow-hidden">
//         <MobileNav />
//         <TopNav title={pageContext.navTitle} />
//         <TransitionProvider
//           location={location}
//           mode="successive"
//           enter={{
//             opacity: 0,
//           }}
//           usual={{
//             opacity: 1,
//           }}
//           leave={{
//             opacity: 0,

//             config: {
//               duration: 100,
//             },
//           }}
//         >
//           <TransitionViews>{children}</TransitionViews>
//         </TransitionProvider>
//         <Footer />
//       </div>
//     )
//   }
// }

// Layout.propTypes = {
//   pageContext: PropTypes.object.isRequired,
//   children: PropTypes.node.isRequired,
//   location: PropTypes.object.isRequired,
// }
// export default Layout
