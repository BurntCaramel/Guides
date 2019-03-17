# Making Single Page Apps & Websites Fast

## Reduce JavaScript

### Why asset sizes matter

In a mobile world, every kilobyte matters.

### Choose your npm packages smartly with [BundlePhobia](https://bundlephobia.com/)

Check sizes of current or future dependencies with [BundlePhobia](https://bundlephobia.com/). Simply enter the name of a npm package, and it will tell you how many downloadable kilobytes it will become, and how long that will take.

#### Example: Lodash

For example, let’s look at **lodash**: <https://bundlephobia.com/result?p=lodash@4.17.11>

![Lodash’s bundle size statistics](./lodash-stats.png)

We can see the minified bundle size, which is what the user’s browser will execute. The minified + gzipped size is the amount that will be downloaded. It is ideal to keep **both** of these sizes down: while speeding up the download will make for a faster user experience, the unzipped size still affects speed as it must be executed before the user sees anything. On a low speed mobile phone, this can be a very noticable effect.

The download times are a good gauge for how long your users will be waiting (For just the download). You can see that 24.2KB doesn’t sound like much, but it will take roughly half a second to download on a slowish 3G connection.

## Speed up images

The online [Essential Image Optimization](https://images.guide/) guide covers many processes and tools that can reduce image sizes and speed up their decoding to improve the experience for your users.

## Measure the experience

### [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

Audit performance and accessibility issues with Lighthouse. The same functionality is also available in Google Chrome’s Audits panel.

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
