const path = require("path")
const _ = require("lodash")
// gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.createPages = async ({actions, graphql }) => {
    const { createPage } = actions

    const tagTemplate = path.resolve("src/templates/tag.js");

    const gagsResult = await graphql(`
    {
         allVideosJson {
            distinct(field: tags)
         }
    }
  `)

    // handle errors
    if (gagsResult.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const tags = gagsResult.data.allVideosJson.distinct;

    //
    // // Make tag pages
    tags.forEach(tag => {

        createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
                tag: tag,
            },
        })
    })
}