module.exports = {
  title: "Collected ❄️ A Guide to the Modern Web",
  description: "Guides on creating systems for your team",
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/RoyalIcing' }
    ],
    sidebar: [
      ['/', 'Welcome'],
      {
        title: 'Guides',
        collapsable: false,
        children: [
          ['/guides/fast-web/', 'Fast Web Apps'],
          ['/guides/web-toolkits/', 'Web Toolkits'],
          ['/guides/styling-components/', 'Styling Components'],
          ['/guides/documentation/', 'Writing Documentation'],
          ['/guides/npm-packages/', 'Making NPM Packages'],
          ['/guides/deploying-web/', 'Deploying Web Apps & Sites'],
          ['/guides/writing-backends/', 'Writing Backends'],
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
      {
        title: 'Conventions',
        collapsable: false,
        children: [
          ['/conventions/schemas/', 'GraphQL Schemas']
        ]
      },
      ['/principles/', 'Principles']
    ],
    // displayAllHeaders: true
  }
}