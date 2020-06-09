// import React from "react"
// import HomeLinkIcon from "./homeLinkIcon"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import LinkedInLink from "./linkedInLink"
// import GitHubLink from "./gitHubLink"

// const MobileNavContent = () => {
//   const data = useStaticQuery(graphql`
//     query posts {
//       projects: allMarkdownRemark(
//         filter: { fields: { slug: { regex: "/projects/" } } }
//         sort: { fields: [frontmatter___date], order: DESC }
//         limit: 3
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//             fields {
//               slug
//             }
//             id
//           }
//         }
//       }

//       blog: allMarkdownRemark(
//         filter: { fields: { slug: { regex: "/blog/" } } }
//         sort: { fields: [frontmatter___date], order: DESC }
//         limit: 3
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//             fields {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div className="relative w-screen h-screen p-10 text-white">
//       <ul className="">
//         <li className="w-8 h-8">
//           <LinkedInLink />
//         </li>
//         <li className="w-8 h-8">
//           <GitHubLink />
//         </li>
//         <li className="w-8 h-8">
//           <HomeLinkIcon />
//         </li>
//       </ul>
//       <ul>
//         <li className="">
//           <Link to="/projects">Projects</Link>
//         </li>
//         {data.projects.edges.map(post => (
//           <li className="post" key={post.node.id}>
//             <Link to={post.node.fields.slug}>
//               {post.node.frontmatter.title}
//             </Link>
//           </li>
//         ))}
//         <li className="">
//           <Link to="/blog">Blog</Link>
//         </li>
//         {data.blog.edges.map(post => (
//           <li className="post" key={post.node.id}>
//             <Link to={post.node.fields.slug}>
//               {post.node.frontmatter.title}
//             </Link>
//           </li>
//         ))}
//         <li className="">
//           <Link to="/contact">Contact</Link>
//           {console.log(data)}
//         </li>
//       </ul>
//     </div>
//   )
// }
// export default MobileNavContent
