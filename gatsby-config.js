module.exports = {
  siteMetadata: {
    title: `Kai Paynter Advisory`,
    titleAlt: 'Kai Paynter Advisory',
    titleTemplate: "%s · American Accent",
    author: 'Boipelo Mawasha',
    description: 'Kai Paynter Advisory',
    url: "https://paynterperformance.com",
    image: "/images/KP-logo.jpg",
    twitterUsername: '@PaynterPerform',
    siteUrl: 'https://paynterperformance.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo_new.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
