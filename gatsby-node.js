const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
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
  `).then(result => {
    result.data.allAirtable.edges.forEach(edge => {
      createPage({
        path: `${edge.node.data.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: edge.node.data.slug,
        },
      })
    })
  })
}
