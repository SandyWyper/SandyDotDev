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

```javascript
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: `${__dirname}/content`,
    },
  },
```

- The content of each of these folders will now be able to referenced via graphql, with the gatsby plugin 'gatsby-transformer-remark'.
- install ['gatsby-tranformer-remark'](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) and add to plugins in gastby-config
- next I created a node field that can be referenced for each project or blog article. It will contain the relevant path/slug

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

### Media in markdown

To enable images to be responsive picture elements in markdown, all you have to do is install a node module.

`npm install --save gatsby-remark-images`

then in gatsby-config.js

```javascript
 {
    resolve: `gatsby-remark-images`,
    options: {
      // It's important to specify the maxWidth (in pixels) of
      // the content container as this plugin uses this as the
      // base for generating different widths of each image.
      maxWidth: 1500,
      withWebp: true,
    },
  },
```

That's it. Then you just reference images as you would have before = `![alt tag for image](./relative-image-path.jpg)`.

GIFs are included in the markdown syntax in the exact same way, but to get them to render you need another Gatsby plugin.

`npm install --save gatsby-remark-copy-linked-files`

This plugin works for GIFs like images, but there's no responsive sizing by Sharp, so whatever size that gif is, that's what every user gets. Also you need to configure the plugin so that it doesn't handle any images in the same way. You can either put all your gif in one folder and set the **destinationDir** to handle things referenced in that directory, or allow it to use any directory, but ignore certain file types.

```javascript
{
  resolve: `gatsby-remark-copy-linked-files`,
  options: {
    // destinationDir: `path/to/dir`,
    ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
  },
},
```

This extention also allows for linking to PDFs and other media.
`[checkout this information pack](./path/to/file.pdf)`

[Prismjs](https://prismjs.com/#examples) is a syntax highlighting package that also has a Gatsby plugin

`npm install --save gatsby-remark-prismjs prismjs`

Of course you also need **gatsby-transformer-remark** already installed. And it is enabled as a plugin of that plugin. [Look at the docs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) for reference. The style of syntax highlighting can be customise yourself, or you include on the standard ones in **gatsby-browser.js** like this `require("prismjs/themes/prism-tomorrow.css")`. If you're wondering where those styles are coming from, it's in the node_modules folder from when you installed prismjs.

### Tailwind integration

1. Install Tailwind as a development dependency.
   `npm install tailwindcss --save-dev'
2. To be able to use Tailwind classes in your SCSS files, add the tailwindcss package into the postCSSPlugins parameter in your gatsby-config.js.
   gatsby-config.js

```javascript
plugins: [
  {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
          require("autoprefixer"),
        ],
      },
    },
  },
],
```

I also installed autoprefixer, however i have not tested this to see if it's deffinitely working.

3.Create you SCSS folder structure how you like it. I went for '/src/styles/index.scss'. And in that file you include you tailwind references, followed by your SCSS partials.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "base";
@import "typography";
```

Then you just need to include your root style sheet in **gatsby-browser.js**.
`import "./src/styles/index.scss"`

4. Check it's working by letting the tailwind fill your metaphorical styling sails.

```css
.test-class {
  @apply bg-gray-400 p-1 flex justify-end;
}
```

5. By default, Tailwind is a very large library because it includes every combination of every class you might think of. Most of these you won’t need, so we use PurgeCSS to remove any unused classes.
   `npm i gatsby-plugin-purgecss`

```javascript
{
  resolve: `gatsby-plugin-purgecss`,
  options: {
    printRejected: true,
    develop: true, // Enable while using `gatsby develop`
    tailwind: true, // Enable tailwindcss support
    ignore: ["prismjs/"],
  },
},
```

Note that you need to ignore Prismjs as the class names that are injected into the code to style the sytax can't be read in the purge process, so we just ignore all of those. Also, if you want to use any styled add-ons, you'd add them here. ReactStrap for example.

Develop should be set to false when developing, but can be set to true to test that the pruge wont turn anything off you need when you build. Because I am using the purgeCSS plugin, in the tailwind.config.js I have set 'purge: false' so that it doesn't try to purge the css twice.

### Adding page transitions

As fast as Gatsby is, it flashes to the next page when you navigate between them. It's startilingly fast, and is a bit jolty.

I wanted the transitions between all pages that aren't the home page to fade, without the top nav fading in and out. Trouble being that in Gatsby the page unmounts and remounts between navigation.

```javascript
<Root>
  <PageElement>
    {/* layout will rerender each time the page template changes */}
    <Layout>{/* page content here */}</Layout>
  </PageElement>
</Root>
```

To get around this you need to install.....wait for it..... another plugun! Hoorah!
`npm install --save gatsby-plugin-layout`

This impliments a different highrarchy, similar to (aparently) the one use in Gatsby V1. Like this...

```javascript
<Root>
  <Layout>
    {/* layout is not affected when the page template changes */}
    <PageElement>{/* page content here */}</PageElement>
  </Layout>
</Root>
```

So then, I installed 'gatsby-plugin-transitions'
`npm install --save gatsby-plugin-transitions gatsby-plugin-layout react-spring react react-dom`

This uses React-Spring to create physics based transitions when navigating between pages.

Created a new file 'src/layouts/index.js' which is then the basis for all routes. I put a new value into the context of each page..... by making some edits to gatsby-node.js and inserting this little bit of code.

```javascript
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      homeLayout: page.path.match(/^\/$/) ? true : false,
    },
  })
}
```

So for every default page created (ie. pages that are created by just existing in the 'pages' directory), delete them and make them again, with an extra value passed to the 'pageContext' property. I also appended that value (to be false) for every other page that i create in 'gatsby-node.js'

Then you can use this value to contionaly render which layout you would like, and in this case, when those transitions take place, and which components you wan them to apply to.

```javascript
import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import Layout from "../components/layout"
import TopNav from "../components/topNav"

export default ({ pageContext, children, location }) => {
  if (pageContext.homeLayout) {
    return (
      <TransitionProvider location={location}>
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    )
  }
  return (
    <Layout>
      <TopNav />
      <TransitionProvider location={location}>
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </Layout>
  )
}
```
