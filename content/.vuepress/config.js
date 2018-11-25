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
          ['/guides/deploying-front-end/', 'Deploying Front End'],
          ['/guides/single-page-apps/', 'Single Page Apps'],
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
          ['/tools/collected-source/', 'Collected Source'],
          ['/tools/datadown/', 'Datadown']
        ]
      }
    ],
    // displayAllHeaders: true
  }
}