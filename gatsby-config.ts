import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Health Calculators`,
    description: `Free health calculators including BMI, calorie, and body fat calculators. Get instant results and learn about your health metrics.`,
    siteUrl: `https://health-calculators.com`,
    author: `@healthcalculators`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Health Calculators',
        short_name: 'Health Calc',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1976d2',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-XXXXXXXXXX", // Replace with your Google Analytics 4 Measurement ID
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}

export default config 