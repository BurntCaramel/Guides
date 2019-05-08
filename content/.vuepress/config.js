module.exports = {
  base: "/guides/",
  title: "Royal Icing · Guides",
  description: "Guides on creating systems for your team",
  themeConfig: {
    nav: [
      { text: "Blog", link: "https://icing.space/" },
      { text: "Guides", link: "/" },
      // { text: "Tools", link: "/tools/" },
      // { text: "GitHub", link: "https://github.com/RoyalIcing" }
    ],
    sidebar: {
      "/": [
        {
          title: "Guides",
          collapsable: false,
          children: [
            ["/", "Intro"],
            ["/fast-web/", "Fast Web Apps"],
            ["/web-toolkits/", "Web Toolkits"],
            ["/styling-components/", "Styling Components"],
            ["/documentation/", "Writing Documentation"],
            ["/npm-packages/", "Making NPM Packages"],
            ["/deploying-web/", "Deploying Web Apps & Sites"],
            ["/writing-backends/", "Writing Backends"],
          ]
        }
      ]
    }
    // displayAllHeaders: true
  }
};
