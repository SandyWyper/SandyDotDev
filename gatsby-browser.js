// styles for code blocks
require("prismjs/themes/prism-tomorrow.css")
// styles for the markdown files that wont be purged because they are rendered after the purge process
require("./src/styles/unpurged.scss")
// styles for the site that get purged
require("./src/styles/index.scss")

// turning off the default behaviour which will now be handled by 'gatsby-plugin-transitions'
exports.shouldUpdateScroll = () => {
  return false
}
