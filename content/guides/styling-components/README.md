# Guide to Styling Components

## Semantic content for users + non-semantic styles for authors

My preference is to use semantic HTML markup and presentational CSS classes. [This post covers it well.](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) Trying to make all CSS classes semantically named makes changes harder and reduces reusability — often semantic CSS styles are one-offs for a particular page.

1. Write semantic, accessible HTML
2. Write extremely-reusable, presentation-first CSS classes that can be sprinkled into HTML markup
3. Wrap reusable markup as components (whether React, Vue, or partials)

----

## [TailwindCSS](https://tailwindcss.com)

Tailwind is my preferred off-the-shelf solution for styling.

- Works in static sites, server-side apps, single page apps.
- Most of what you need comes out of the box, so you usually won’t be needing to write new CSS.
- Leads to less writing of one-off styles, which often make maintenance very difficult.
- Make building responsive designs much easier.
- Brings a system to styling while playing to CSS strengths: reusability and UX speed.

----

## CSS Variables (aka Custom Properties)

CSS Variables have [good browser support](https://caniuse.com/#feat=css-variables) and will work for decades to come. They make overriding for a particular context much easier — no more fighting with CSS rules trying to make a more specific selector to ensure your overrides win.
