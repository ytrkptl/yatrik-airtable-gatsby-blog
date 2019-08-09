module.exports = {
  siteMetadata: {
    title: `Yatrik's Airtable Gatsby Blog`,
    description: `Just trying to create a Gatsby blog so I can practice my developer skills, and can also use it as a blog.`,
    author: `Yatrik Patel`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-airtable',
      options: {
        // apiKey: process.env.AIRTABLE_API_KEY,
        apiKey: 'keyD2h8sy1iwcLkd7',
        tables: [
          {
            // baseId: process.env.AIRTABLE_BASE_ID,
            baseId: 'app74bp27kA8jrK8M',
            tableName: 'CMS',
            tableView: 'published'
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates`,
      },
    },
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/innovation.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
