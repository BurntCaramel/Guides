module.exports = {
  // base: "/guides/",
  title: "Royal Icing",
  description: "Guides on creating systems for your team",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://icing.space/wp-content/themes/royalicing/fonts/728649/97244AA2CF2CCFB1E.css' }]
  ],
  port: 4848,
  themeConfig: {
    nav: [
      { text: "Blog", link: "/" },
      { text: "Guides", link: "/guides/" },
      { text: "Tools", link: "/tools/" },
      { text: "Bookshelf", link: "/recommendations/" },
      // { text: "GitHub", link: "https://github.com/RoyalIcing" }
    ],
    sidebar: {
      "/guides/": [
        {
          title: "Guides",
          collapsable: false,
          children: [
            ["/guides/", "Intro"],
            ["/guides/accessible-web/", "Accessible Web"],
            ["/guides/fast-web/", "Faster Web"],
            ["/guides/accessibility-first-testing/", "Accessibility-First Testing"],
            ["/guides/go-backends/", "Go Backends"],
            ["/guides/documentation/", "Writing Documentation"],
            ["/guides/typescript-patterns/", "TypeScript Patterns"],
            ["/guides/deploying-web/", "Deploying Web Apps & Sites"],
            ["/guides/web-toolkits/", "Web Toolkits"],
            ["/guides/styling-components/", "Styling Components"],
            ["/guides/npm-packages/", "Making NPM Packages"],
          ]
        }
      ],
      "/tools/": [
        {
          title: "Tools",
          collapsable: false,
          children: [
            ["/tools/", "Intro"],
            ["/tools/lantern/", "Lantern"],
            ["/tools/dovetail/", "Dovetail"],
            ["/tools/datadown/", "Datadown"],
            ["/tools/principles/", "Principles"],
            ["/tools/support/", "Support"]
          ]
        }
      ]
    }
    // displayAllHeaders: true
  }
};
