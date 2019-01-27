module.exports = {
  title: "Collected Systems",
  description: "Guides on creating systems for your team",
  themeConfig: {
    nav: [
      { text: 'Our GitHub', link: 'https://github.com/RoyalIcing' }
    ],
    sidebar: [
      ['/', 'Welcome'],
      ['/principles/', 'Principles'],
      {
        title: 'Guides to Making',
        collapsable: false,
        children: [
          ['/guides/fast-web/', 'Fast Web Apps and Sites'],
          ['/guides/single-page-apps/', 'Single Page Apps'],
          ['/guides/npm-packages/', 'NPM Packages'],
          ['/guides/deploying-front-end/', 'Deploying Front End'],
          ['/guides/documentation/', {
            title: 'Documentation',
            children: [
              ['/guides/documentation/writing', 'Writing Documentation']
            ]
          }],
          // ['/guides/components/', 'Components'],
          // ['/guides/documentation/', 'Documentation'],
          // ['/guides/static-sites/', 'Static Sites'],
        ]
      },
      {
        title: 'Conventions',
        collapsable: false,
        children: [
          ['/conventions/schemas/', 'GraphQL Schemas']
        ]
      },
      {
        title: 'Tools',
        collapsable: false,
        children: [
          ['/tools/syrup/', 'Syrup'],
          ['/tools/collected-source/', 'Collected Source'],
          ['/tools/datadown/', 'Datadown']
        ]
      }
    ],
    // displayAllHeaders: true
  }
}