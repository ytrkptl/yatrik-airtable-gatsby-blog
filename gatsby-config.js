require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Yatrik's Airtable Gatsby Blog`,
    description: `Just trying to create a Gatsby blog so I can practice my developer skills, and can also use it as a blog.`,
    author: `Yatrik Patel`,
    image: `/innovation.png`, // Add your default image path here
    siteUrl: `https://yatrik-blog.netlify.app/`, // Add your site URL here
    twitterUsername: `@ytrkptl` // Add your Twitter handle here
  },
  plugins: [
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "CMS",
            tableView: "published"
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yatrik's Airtable Gatsby Blog`,
        short_name: `Yatrik's Airtable Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/innovation.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
