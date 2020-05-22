# A personal portfolio and blog site

### Upgrading Gatsby Default Starter

I decided to take the most basic starter from Gatsby and build up the neccary dependencies and plugins. This way I should gain a better understanding of how it works and how I can make it work for me. Lets go!

---

#### First things

- I changed the gatsby-config.js file to more appropriate site title, description and author.
- Also enabling the 'gatsby-plugin-offline' plugin.
- git init and push up to GitHub

### Enable blogs

I want to have two 'blog' type parts to this site. Projects, where I show off things I have built, and Blog, where I write about web devery. Each feed will be generated using markdown files, images and templates that render the finished articles. I took the following steps to set this up.

- Created a new directory structure in the root. Content folder with blog and project folders inside.
- These folders then get referenced inside gatsby-config.js

```
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: `${__dirname}/content`,
    },
  },
```

- The content of each of these folders will now be able to referenced via graphql, with the gatsby plugin 'gatsby-transformer-remark'.
- install ['gatsby-tranformer-remark'](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- next I created a node field that can be referenced for each project or blog article. It will contain the relevant path/slug

```
// ---  gatsby-node.js ----------  Create node available to graphql query - making paths based on directory names ----------- //////
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
```

- create page templates for articles and projects. Add directory in 'src' called 'templates'.
- in the gatsby-node.js you must then create pages for everything in 'content' directory

```
/// --------------------  Create pages for folders contained in 'content' directory ---------------------------- //////
/// -- Order the results by date, declared in frontmatter [ is this nessecary, does it matter what order the pages are created in? ]
/// -- If the slug created in the node conatins 'projects' then feed the contents of that page to the projects template
/// -- Else, use the blog template
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)

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
}

```
