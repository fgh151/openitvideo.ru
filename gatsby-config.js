module.exports = {
    siteMetadata: {
        title: `openitvideo`,
        description: `AVideo collections`,
        author: `Fedor B Gorsky`,
    },
  /* Your site config here */
  plugins: [


      {
          resolve: `gatsby-plugin-paginate`,
          options: {
              sources: [
                  {
                      path: `/page`,
                      pageSize: 12,
                      template: `${__dirname}/src/templates/index.js`,
                      serialize: (results) => results.allVideosJson.edges,
                      query: `{
         allVideosJson {
    edges {
      node {
        id
        tags
        title
        url
      }
    }
  }
    }`
                  }
              ]
          }
      },



      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `GatsbyJS translated tutorial`,
              short_name: `GatsbyJS tutorial`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `static/favicon.ico`,
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
