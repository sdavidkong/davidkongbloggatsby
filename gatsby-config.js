require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'davidkong.blog',
    description: 'Exploring ideas about the decentralized future',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'r9qdltwltsoz',
        accessToken: '-wBhwWePK1xhbIG0rWCDtOKAhFA8y_oM0PlAgE0z5Z0',
        host: 'cdn.contentful.com',
      },
    },
  ],
}
