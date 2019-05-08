module.exports = {
  title: "Royal Icing",
  description: "Guides on creating systems for your team",
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/RoyalIcing' }
    ],
    sidebar: [
      // ['/', 'Blog'],
      {
        title: 'Guides',
        collapsable: false,
        children: [
          ['/guides/', 'Intro'],
          ['/guides/fast-web/', 'Fast Web Apps'],
          ['/guides/web-toolkits/', 'Web Toolkits'],
          ['/guides/styling-components/', 'Styling Components'],
          ['/guides/documentation/', 'Writing Documentation'],
          ['/guides/npm-packages/', 'Making NPM Packages'],
          ['/guides/deploying-web/', 'Deploying Web Apps & Sites'],
          ['/guides/writing-backends/', 'Writing Backends'],
          ['/guides/principles/', 'Principles'],
          // {
          //   title: 'Documentation',
          //   children: [
          //     ['/guides/documentation/writing', 'Writing Documentation']
          //   ]
          // },
          // ['/guides/components/', 'Components'],
          // ['/guides/static-sites/', 'Static Sites'],
        ]
      },
      {
        title: 'Tools',
        collapsable: false,
        children: [
          ['/tools/collectedql/', 'CollectedQL'],
          ['/tools/datadown/', 'Datadown']
        ]
      },
      // {
      //   title: 'Conventions',
      //   collapsable: false,
      //   children: [
      //     ['/conventions/schemas/', 'GraphQL Schemas']
      //   ]
      // }
    ],
    // displayAllHeaders: true
  }
}