# Guide to Deploying Web Apps & Sites

## [Cloudflare Workers:](https://workers.dev/) APIs, proxies, dynamic sites

[![$5 base cost for unlimited users](https://badgen.net/badge/team/$5%20monthly/green)
![bandwidth is free](https://badgen.net/badge/bandwidth/free/green)
![first 10 million requests are free](https://badgen.net/badge/first%2010M%20requests/free/green)
![$.50 per million requests after](https://badgen.net/badge/per%201M%20request%20after/$0.50/green)][cloudflare workers pricing]

### Advantages

- Deploys to 200+ centers around the world
- Use JavaScript, TypeScript, and WebAssembly
- Server render at low latency
- Proxy requests to anywhere using `fetch()`
- Supports `POST` as well as `GET`
- Caches proxied requests by default; also supports manual cache store
- Use worldwide key-value store
- Can use Terraform or Serverless to deploy
- Bandwidth is free
- No cost for extra users

### Disadvantages

- Doesn’t support Node.js APIs
- Dedicated HTTPS (not shared certificate) costs $5/month
- Multiple scripts requires expensive enterprise plan


## [Netlify:](https://www.netlify.com/) single page apps, static sites

[![monthly cost for 1 user](https://badgen.net/badge/1%20user/free/green)
![$49 monthly for 5 users plus $9 per additional user](https://badgen.net/badge/5%20users/$49%20monthly%20+%20$9%20per%20user/green)
![$290 monthly for 10 roled users plus $29 per additional user](https://badgen.net/badge/10%20users%20w%20roles/$290%20monthly%20+%20$29%20per%20user/green)][netlify pricing]

### Advantages

- Can use Netlify solo for free, and deploy unlimited sites
- Integrates with GitHub for continuous deployment
- Can build the site (using Node, Golang, etc) for you
- [Proxy subpaths to an API](https://www.netlify.com/docs/redirects/) to have a single domain and avoid CORS issues
- Has a well designed dashboard for managing sites
- Allow you to [insert snippets](https://www.netlify.com/docs/inject-analytics-snippets/) onto every page
- Has conviences for user authentication, form submissions
- Lets you do A/B split testing
- Handles [HTTPS using LetsEncrypt](https://www.netlify.com/docs/ssl/)
- Has an [API to manage deploys](https://www.netlify.com/docs/api/)
- Allows server-side JavaScript using AWS Lambda

### Disadvantages

- Only Lambda language is JavaScript
- Only Lambda region is AWS’s us-east


## [Zeit Now:](https://zeit.co/now) APIs, single page apps, static sites

[![free for 5 users](https://badgen.net/badge/5%20users/$0/green)
![$25 per user above 5 users](https://badgen.net/badge/6+%20users/$25%20per%20user/green)][now pricing]

[![$0.99 base cost](https://badgen.net/badge/base/$0.99%20monthly/green)
![$0.1 per GB of bandwidth](https://badgen.net/badge/per%20GB%20bandwidth/$0.1/green)
![$0.40 per million requests](https://badgen.net/badge/per%201M%20request/$0.40/green)
![$0.000034 per GB of RAM per second](https://badgen.net/badge/per%20GB%20RAM%20per%20second/$0.000034/green)][now pricing]

### Advantages

- Integrates with [Cloudflare’s CDN](https://zeit.co/docs/features/cdn) for an extra $5
- Integrates with GitHub for continuous deployment
- Supports multiple languages in a single deploy
- Supports CI with same pricing structure
- Handles [HTTPS automatically using LetsEncrypt](https://zeit.co/docs/features/certs)
- [Proxy subpaths to an API](https://zeit.co/docs/features/path-aliases) to have a single domain and avoid CORS issues
- Has an [API to manage deploys](https://zeit.co/api)

### Disadvantages

- Encourages monorepo of multiple functions, making it hard to migrate away
- Unclear roadmap

### Handy links

- Config file: https://zeit.co/docs/features/configuration


## [Render:](https://render.com/) Web Apps, APIs, Databases, Background Tasks, Docker, Static Sites


## [Fly.io:](https://fly.io/) APIs, Docker, Redis


[cloudflare workers pricing]: https://support.cloudflare.com/hc/en-us/articles/360001657552-Billing-for-Cloudflare-Workers
[netlify pricing]: https://www.netlify.com/pricing/
[now pricing]: https://zeit.co/pricing
