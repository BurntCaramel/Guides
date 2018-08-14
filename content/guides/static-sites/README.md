# Guide to Making and Deploying Static Sites

## Deploying

### Zeit Now

#### Advantages

- Integrates with [Cloudflare CDN](https://zeit.co/docs/features/cdn), for a $5 fee
- Handles [HTTPS automatically using LetsEncrypt](https://zeit.co/docs/features/certs)
- Support Node.js and Docker servers too
- Has a [full featured API](https://zeit.co/api)

#### Disadvantages

- You must build the site assets on your computer before deploying
- Requires an alias step

#### Handy links

- Config file: https://zeit.co/docs/features/configuration

### Netlify

#### Advantages

- Can use Netlify solo for free, and deploy unlimited sites
- Integrates with GitHub to automatically deploy after every push
- Can build the site (using Node, Golang, etc) for you
- [Proxy subpaths to an API](https://www.netlify.com/docs/redirects/) to avoid CORS issues
- Has a well designed dashboard for managing sites
- Allow you to [insert snippets](https://www.netlify.com/docs/inject-analytics-snippets/) onto every page
- Handles [HTTPS using LetsEncrypt](https://www.netlify.com/docs/ssl/)
- Has a [full featured API](https://www.netlify.com/docs/api/)
