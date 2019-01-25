# Guide to Making Single Page Apps

## Toolkits

### [create-react-app](https://github.com/developit/preact-cli)

![npm version](https://badgen.net/npm/v/create-react-app?color=orange)
![license](https://badgen.net/github/license/facebook/create-react-app)
![monthly downloads](https://badgen.net/npm/dm/create-react-app?color=yellow)
![github stars](https://badgen.net/github/stars/facebook/create-react-app?color=yellow)


### [preact-cli](https://github.com/developit/preact-cli)

![npm version](https://badgen.net/npm/v/preact-cli?color=orange)
![license](https://badgen.net/github/license/developit/preact-cli)
![monthly downloads](https://badgen.net/npm/dm/preact-cli?color=yellow)
![github stars](https://badgen.net/github/stars/developit/preact-cli?color=yellow)

A richly featured yet lightweight foundation for single page apps. Its bundle size is 4.5KB, which includes a router.

It prerenders the homepage to improve performance for slower connections, and can be set up to prerender subpages too. You can customize the underlying Webpack config. A new version of preact-cli is currently under development, which incorporates Webpack 4 and other enhancements.

Because it starts so lightweight, other frameworks such as React, Vue, or Elm can be added on top.

### [vue-cli](https://github.com/vuejs/vue-cli)

![npm version](https://badgen.net/npm/v/vue-cli?color=orange)
![license](https://badgen.net/github/license/vuejs/vue-cli)
![monthly downloads](https://badgen.net/npm/dm/vue-cli?color=yellow)
![github stars](https://badgen.net/github/stars/vuejs/vue-cli?color=yellow)

Vue CLI has a nice range of plugins such as TypeScript and PostCSS. You can customize the underlying Webpack config.

### Gatsby

_To come_

### React Static

_To come_

### NWB

_To come_

## React libraries

### [reach-router](https://reach.tech/router)

![minzipped size](https://badgen.net/bundlephobia/minzip/@reach/router?color=green)
![npm version](https://badgen.net/npm/v/@reach/router?color=orange)
![license](https://badgen.net/github/license/reach/router)
![monthly downloads](https://badgen.net/npm/dm/@reach/router?color=yellow)
![github stars](https://badgen.net/github/stars/reach/router?color=yellow)

A mature take on routing for React. Its creator helped make React Router, and Reach Router succeeds it by improving on accessibility, ease of use, and bundled size.

## Improving the experience

### [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

Audit performance and accessibility issues with Lighthouse

### [httpstat](https://github.com/reorx/httpstat) (command line)

![license](https://badgen.net/github/license/reorx/httpstat)
![github stars](https://badgen.net/github/stars/reorx/httpstat?color=yellow)

See durations of DNS lookup, TCP connection, TLS handshake, server processing, and transfer times.

```
> httpstat https://collected.systems/
Connected to 13.56.48.87:443 from 0.0.0.0:61669

HTTP/2 200 
date: Sat, 18 Aug 2018 05:44:44 GMT
content-type: text/html; charset=utf-8
content-length: 5685
last-modified: Sun, 12 Aug 2018 23:21:26 GMT

  DNS Lookup   TCP Connection   TLS Handshake   Server Processing   Content Transfer
[     5ms    |      243ms     |     400ms     |       457ms       |        1ms       ]
             |                |               |                   |                  |
    namelookup:5ms            |               |                   |                  |
                        connect:248ms         |                   |                  |
                                    pretransfer:648ms             |                  |
                                                      starttransfer:1105ms           |
                                                                                 total:1106ms 
```
