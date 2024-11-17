const path = require("path");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allAirtable {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allAirtable.edges.forEach((edge) => {
      createPage({
        path: `${edge.node.data.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: edge.node.data.slug
        }
      });
    });
  });
}
