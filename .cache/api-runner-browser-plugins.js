module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Health Calculators","short_name":"Health Calc","start_url":"/","background_color":"#ffffff","theme_color":"#1976d2","display":"standalone","icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"8e26f22094a11f6a689d8302dc30782c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-XXXXXXXXXX"],"gtagConfig":{"anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":true,"respectDNT":false,"exclude":[],"origin":"https://www.googletagmanager.com","delayOnRouteUpdate":0}},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
