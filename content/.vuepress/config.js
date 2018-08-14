module.exports = {
  title: "Collected Systems",
  description: "Guides on creating systems for your team",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Royal Icing GitHub', link: 'https://github.com/RoyalIcing' }
    ],
    sidebar: [
      ['/', 'Welcome'],
      {
        title: 'Guides to Making',
        collapsable: false,
        children: [
          ['/guides/static-sites/', 'Static Sites'],
          ['/guides/single-page-apps/', 'Single Page Apps'],
          ['/guides/components/', 'Components'],
          ['/guides/documentation/', 'Documentation'],
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
      },
      '/principles/'
    ],
    // displayAllHeaders: true
  }
}