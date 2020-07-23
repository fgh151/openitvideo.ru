module.exports = {
    siteMetadata: {
        title: `openitvideo`,
        description: `AVideo collections`,
        author: `Fedor B Gorsky`,
    },
  /* Your site config here */
  plugins: [
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `GatsbyJS translated tutorial`,
              short_name: `GatsbyJS tutorial`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `public/favicon.ico`,
              include_favicon: true
          }
      },
      'gatsby-plugin-offline',
      'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
  ],
}
