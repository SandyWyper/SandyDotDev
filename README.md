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
- These folders then get specifically referenced inside gatsby-config.js

```
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects`,
      },
```

- The content of each of these folders will now be able to referenced via graphql, after I enable the gatsby plugin 'gatsby-transformer-remark'.
- install ['gatsby-tranformer-remark'](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
