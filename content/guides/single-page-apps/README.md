# Guide to Making Single Page Apps

## Toolkits

### preact-cli

[Preact CLI](https://github.com/developit/preact-cli) is a richly featured yet lightweight single page app. With an include router, its bundle size is 4.5KB. It prerenders the homepage to improve performance for slower connections, and can be set up to prerender subpages too. You can customize the underlying Webpack config. A new version of preact-cli is currently under development, which incorporates Webpack 4 and other enhancements.

Because it starts so lightweight, other frameworks such as React, Vue, or Elm can be added on top.

### vue-cli

[Vue CLI](https://github.com/vuejs/vue-cli) has a nice range of plugins such as TypeScript and PostCSS. You can customize the underlying Webpack config.

### Razzle

To come

### NWB

To come

## React

### reach-router

[Reach Router](https://reach.tech/router) is a mature take on routing for React. Its creator helped make four releases of React Router, and Reach Router succeeds it by improving on: accessibility, ease of use, and download size.

## Improving the experience

### Lighthouse

Audit performance and accessibility issues with [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

### httpstat (command line)

See durations of DNS lookup, TCP connection, TLS handshake, server processing, and transfer times: https://github.com/reorx/httpstat
