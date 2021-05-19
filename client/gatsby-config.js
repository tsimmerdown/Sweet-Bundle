require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Sweet Bundle`,
    description: `A bundle of joy. We have deserts to satisfy all sorts of sweet teeth.`,
    author: `@tsimmerdown`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4dsl52evmms9`,
        accessToken: process.env.GATSBY_CONTENTFUL_API_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:100,400`],
        display: "swap",
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_INSTAGRAM_API_TOKEN,
      },
    },
  ],
}
