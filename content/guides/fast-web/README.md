# Making Single Page Apps & Websites Fast

## Reduce asset sizes

### [BundlePhobia](https://bundlephobia.com/)

Check sizes of current or future dependencies with [BundlePhobia](https://bundlephobia.com/).

For example, let’s look at **lodash**: https://bundlephobia.com/result?p=lodash@4.17.11

We can see the minified bundle size, which is what the user’s browser will execute. The minified + gzipped size is the amount that will be downloaded. It is ideal to keep **both** of these sizes down: while speeding up the download will make for a faster user experience, the unzipped size still affects speed as it must be executed before the user sees anything. On a low speed mobile phone, this can be a very noticable effect.

The download times are a good gauge for how long your users will be waiting (For just the download). You can see that 24.2KB doesn’t sound like much, but it will take roughly half a second to download on a slowish 3G connection.
