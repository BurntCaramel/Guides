module.exports = {
  // base: "/guides/",
  title: "Royal Icing",
  description: "Guides on creating systems for your team",
  themeConfig: {
    nav: [
      { text: "Blog", link: "/" },
      { text: "Guides", link: "/guides/" },
      { text: "Tools", link: "/tools/" },
      // { text: "GitHub", link: "https://github.com/RoyalIcing" }
    ],
    sidebar: {
      "/guides/": [
        {
          title: "Guides",
          collapsable: false,
          children: [
            ["/guides/", "Intro"],
            ["/guides/fast-web/", "Faster Web Apps"],
            ["/guides/web-toolkits/", "Web Toolkits"],
            ["/guides/styling-components/", "Styling Components"],
            ["/guides/documentation/", "Writing Documentation"],
            ["/guides/npm-packages/", "Making NPM Packages"],
            ["/guides/deploying-web/", "Deploying Web Apps & Sites"],
            ["/guides/writing-backends/", "Writing Backends"],
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
            ["/tools/collectedql/", "CollectedQL"],
            ["/tools/datadown/", "Datadown"],
            ["/tools/principles/", "Principles"]
            ["/tools/support/", "Support"]
          ]
        }
      ]
    }
    // displayAllHeaders: true
  }
};
