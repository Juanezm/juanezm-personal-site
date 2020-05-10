/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `💾 73`,
        description: `A place where even bad ideas are welcome.`,
        // change this to you website url
        siteUrl: `https://juanezm.com/`,
        home: {
            title: `Hi! I'm Juan Emilio Zurita`,
            description: `Welcome to my personal blog :)`,
        },
        w3l_dom_key: `5eadca1465078CF_Domain_verify`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/_data`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-emojis',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-38954105-2',
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Juanezm's Blog`,
                short_name: `73`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#381696`,
                display: `standalone`,
                icon: 'src/images/icon.png',
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        'gatsby-plugin-dark-mode',
        // siteURL is a must for sitemap generation
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
    ],
}
