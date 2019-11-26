module.exports = {
  plugins: [
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/blog/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/blog/content`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/config/translations`,
      name: `translations`,
    },
  },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 600,
          },
        },
      ],
    },
  },
    `gatsby-transformer-json`,
    `gatsby-plugin-typescript`,
  ],
}
