module.exports = {
  title: "Collected: Guides & Tools",
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
          ['/tools/collected-edge/', 'Collected Edge'],
          ['/tools/collected-source/', 'Collected Source'],
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