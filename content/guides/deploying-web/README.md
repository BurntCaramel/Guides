# Guide to Deploying Web Apps & Sites

## Cloudflare Workers

- Costs $5 per month, plus base cost of Cloudflare service

### Advantages

- Can run dynamic code, not just static
- Deploys to 120+ centers around the world
- Can proxy requests to anywhere
- Use JavaScript, TypeScript, and Webassembly

### Disadvantages

- Need origin server behind
- Doesn’t support Node.js APIs
- Dedicated HTTPS (not shared certificate) costs additional fee

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

- Only Lambda language is JavaScript
- Only Lambda region is AWS’s us-east

## Zeit Now

### Advantages

- Integrates with [Cloudflare’s worldwide CDN](https://zeit.co/docs/features/cdn), for an extra $5
- Handles [HTTPS automatically using LetsEncrypt](https://zeit.co/docs/features/certs)
- Supports many application environments
- [Proxy subpaths to an API](https://zeit.co/docs/features/path-aliases) to have a single domain and avoid CORS issues
- Has a [full featured API](https://zeit.co/api)

### Disadvantages

- You must build the site assets on your computer before deploying, or [alternatively using a Dockerfile](https://zeit.co/docs/features/static-builds)
- Docker support has been deprecated

### Handy links

- Config file: https://zeit.co/docs/features/configuration
