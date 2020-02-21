# Guide to Accessible Web

## HTML is critical to get right

## Landmarks: where?

### The _main_ content

Do you ever skip the intro on Netflix? Imagine having to sit through a 2 minute sequence every time if that button didn’t exist. We’re not interested: we want the **main** part of the show. Every episode has the timestamp of when the _real_ show starts, and that’s what this skip button jumps ahead to.

The `<main>` element is similar. It holds the primary content that the user is interested in. The user can _skip_ ahead. Past repetitive stuff like navigation links and legal text, and so these should be kept outside of `<main>`.

### _Navigating_ around

Visually it’s usually easy to find the navigation bar — it’s up top or in a sidebar, and holds a series of links. But there's no rule here (find the thing with lots of links inside), so we need a specific HTML element: `<nav>`.

Like the skipping to the main content, nav is like pressing the menu button on a remote.

### _Searching_

Again in the world of Netflix, searching is a common task. What if you had to scroll through 50 movie posters to get to the search box? You would probably curse or give up.

Adding the `role` attribute with `"searchbox"` adds it as a landmark, allowing people to jump straight to the search and quickly get searching.

### _Articles_ of interest

### Headers and footers

What's the difference between a header and footer? Well, headers appear at the top and footers at the bottom, right?

### Heirarchy of importance

What’s the most important part of the page is a good question to ask. But so is: what’s of less importance? What is acting as support to a bigger element of the page?

Using `<aside>` can let browsers know that what is inside is supporting content. It’s not essential, but it could be interesting if someone wants to dive in deeper. 

## Roles: what?

## Widgets: how?

## Checklist

1. Landmarks: provide familiar touch points that can be found easily
2. Roles: give every element meaning
3. Widgets: allow everyone to use your controls

## Suggested workflows

- Use a browser extension such as [this one that shows landmarks on the current page](https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp) to study existing pages you visit and compare it to your own work.
- Use [accessibility-first TDD](http://localhost:4848/guides/accessibility-first-testing/) to ensure your meet the requirements for landmarks and roles at the beginning.

## Patterns

- [ARIA Design Pattern Examples](https://www.w3.org/TR/wai-aria-practices/examples/) is a huge list of ARIA-compliant implementations from Alerts to Date Pickers to Toolbars to Slider controls to Carousels.
- [Accessible Developer Guide](https://www.accessibility-developer-guide.com/introduction/) aims to “bridge the gap between providers of websites and users with special needs.”
- [Accessibility for Everyone](https://abookapart.com/products/accessibility-for-everyone) by Laura Kalbag is “an enjoyable and practical introduction to accessibility, covering everything from background knowledge to front-end implementation (and many things between).” — Léonie Watson
- [Marking elements as the current one using aria-current](https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/current/)

## Use RSS

RSS lets users just see the content. They can read without distractions, they can read it as they like surrounded
