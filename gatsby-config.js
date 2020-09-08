module.exports = {
    siteMetadata: {
        title: `openitvideo`,
        description: `AVideo collections`,
        author: `Fedor B Gorsky`,
    },
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-yandex-metrika`,
            options: {
                // The ID of yandex metrika.
                trackingId: 67134169,
                // Enabled a webvisor. The default value is `false`.
                webvisor: true,
                // Enables tracking a hash in URL. The default value is `false`.
                trackHash: true,
                // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
                // and `true` means after the body (faster loading, less hits). The default value is `false`.
                afterBody: true,
                // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
                // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
                defer: false,
            },
        },

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
                name: `OpenItVideo`,
                short_name: `OpenItVideo`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#FF0000`,
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
