// TODO:: refactor for less graphgl requests -

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// -------------  Create node available to graphql query - making paths based on directory names ----------- //////
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// ------------------------------------------------------------------------------------------------------------ ///////

/// --------------------  Create pages for folders contained in 'content' directory ---------------------------- //////
/// -- Order the results by date, declared in frontmatter [ is this nessecary, does it matter what order the pages are created in? ]
/// -- If the slug created in the node conatins 'projects' then feed the contents of that page to the projects template
/// -- Else, use the blog template
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // templates
  const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)
  const blogLandingTemplate = require.resolve(
    `./src/templates/blogLandingTemplate.js`
  )
  const projectsLandingTemplate = require.resolve(
    `./src/templates/projectsLandingTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.slug.includes("projects")) {
      createPage({
        path: node.fields.slug,
        component: projectTemplate,
        context: {
          // additional data can be passed via context
          slug: node.fields.slug,
        },
      })
    } else {
      createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: {
          // additional data can be passed via context
          slug: node.fields.slug,
        },
      })
    }
  })

  /// ------------------------------------ Create landing page for blog articles ---------------------  ///
  /// --- I must query allMarkdownRemark for posts test them against a regex value in order to get only the ones with '/blog/' in the slug ---- ///
  /// --- Then create however many landing pages are needed to allow for pagination --------------------  ///
  /// --- Feed the template with some variables to tell that page which and how many articles to show --- ///
  const articles = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 120)
            frontmatter {
              tags
              title
              date(formatString: "DD/MM/YYYY")
              category
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (articles.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-list pages
  const blogPosts = articles.data.allMarkdownRemark.edges
  const blogPostsPerPage = 6
  const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogLandingTemplate,
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numBlogPages,
        currentPage: i + 1,
      },
    })
  })
  /// ------------------------------------ Create landing page for projects ---------------------  ///
  const projects = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/projects/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 120)
            frontmatter {
              tags
              title
              date(formatString: "DD/MM/YYYY")
              category
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create projects-list pages
  const projectPosts = projects.data.allMarkdownRemark.edges
  const projectsPostsPerPage = 6
  const numProjectPages = Math.ceil(projectPosts.length / projectsPostsPerPage)
  Array.from({ length: numProjectPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: projectsLandingTemplate,
      context: {
        limit: projectsPostsPerPage,
        skip: i * projectsPostsPerPage,
        numProjectPages,
        currentPage: i + 1,
      },
    })
  })
}
/// ------------------------------------------------------------------------------------------------  ///
