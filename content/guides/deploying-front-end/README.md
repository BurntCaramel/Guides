# Guide to Deploying Web Front Ends

## Netlify

### Advantages

- Can use Netlify solo for free, and deploy unlimited sites
- Integrates with GitHub to automatically deploy after every push
- Can build the site (using Node, Golang, etc) for you
- [Proxy subpaths to an API](https://www.netlify.com/docs/redirects/) to have a single domain and avoid CORS issues
- Has a well designed dashboard for managing sites
- Allow you to [insert snippets](https://www.netlify.com/docs/inject-analytics-snippets/) onto every page
- Has conviences for user authentication, form submissions
- Lets you do A/B split testing
- Handles [HTTPS using LetsEncrypt](https://www.netlify.com/docs/ssl/)
- Has a [full featured API](https://www.netlify.com/docs/api/)
- Allows server-side JavaScript using AWS Lambda

### Disadvantages

- Only server-side language is JavaScript

## Zeit Now

### Advantages

- Integrates with [Cloudflare’s worldwide CDN](https://zeit.co/docs/features/cdn), for an extra $5
- Handles [HTTPS automatically using LetsEncrypt](https://zeit.co/docs/features/certs)
- Support Node.js and Docker servers too
- [Proxy subpaths to an API](https://zeit.co/docs/features/path-aliases) to have a single domain and avoid CORS issues
- Has a [full featured API](https://zeit.co/api)

### Disadvantages

- You must build the site assets on your computer before deploying, or [alternatively using a Dockerfile](https://zeit.co/docs/features/static-builds)

### Handy links

- Config file: https://zeit.co/docs/features/configuration
