# A personal portfolio and blog site

### Upgrading Gatsby Default Starter

I decided to take the most basic starter from Gatsby and build up the neccary dependencies and plugins. This way I should gain a better understanding of how it works and how I can make it work for me. Lets go!

---

#### First things

- I changed the gatsby-config.js file to more appropriate site title, description and author.
- Also enabling the 'gatsby-plugin-offline' plugin.
- git init and push up to GitHub

#### Enable blogs

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

When doing this we are able to select which template to use for that page, and pass a variable along with it. I have used the "slug" that we created before. Then while in that template we can target the correct project/blog for our graphql query that extracts ervything we need to render the page.

#### Blog and Projects landing pages

The blog landing pages must be created dynamically to accomodate pagination if there too many posts to display on one page. 'gatcby-node.js' must look at how many posts there are, and generate multiple pages that use the same template which has the appropriate posts data fed to them.

```
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
```

Then that landing page will recieve the nesseccary variable to query for the relevant articles. Neccessary variables are passed to each template through 'context' and appear as props in the templates. Here we pass variables to allow the correct articles to be queried by the template, and information about which page we are on, to allow us to render navigation between these pages. Then in the template....

```
    // render navigation between blog-listing pages if there are more then one.
    const { currentPage, numBlogPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numBlogPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    // -------then
    return(
      {!isFirst && (
        <Link to={`/blog/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`/blog/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    )

```

Blog landing page graphql query looks like this. More frontmatter can be added, but the takeaway is the way we are selecting which articles to display.

```
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
```

#### The Nav

I want the nav to be different on the home page to the rest of the site. So rather than making it twice, I want it to know what location path the user is currently on. Gatsby by default comes with some methods that allow us to know this, but only applies to the <Link> component. You just add activeClassName or activeStyle to the component and it will check the location pathname. Trouble being that i want to toggle classes on the whole nav, not just the <Link> component.

In Gatsby, location.pathname is prop of the root Components of any page, but not the children. So I drilled the prop down from the root page Components through <Layout> to <Nav>. The <Nav> component can now use this as one of it's props to determine how it wants to be displayed.

#### Home page

This page will contain a top-fold title and description, hopefully with easy sign-posting. Then a 'latest project' section, followed by 'latest-article' section. Each containing a wee image, title, description, (tags maybe) and link to the article/project.

Each of these page sections are components that will take the content from the markdown files in the root. Latest porject queries for articles with '/projects/' in the slug, sorts them by date and only returns 1 result. Here's the grahql query from LatestProject component.

```
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/projects/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD/MM/YYYY")
              tags
              posttype
              description
              cover {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const projectDetails = data.allMarkdownRemark.edges[0].node.frontmatter
  const projectPath = data.allMarkdownRemark.edges[0].node.fields.slug
```

This is all inside a functional component that then returns jsx. Image is processed by 'gatsby-image' again.
