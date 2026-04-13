# PHARMA-Connectiv — Premium Website

## Project Structure

```
pharma-connectiv/
│
├── index.html              ← Main page (all sections, semantic HTML)
│
├── css/
│   └── styles.css          ← All styles: variables, layout, components, animations, responsive
│
├── js/
│   ├── data.js             ← Product & brand data objects (edit here to add/update)
│   └── main.js             ← All interactions: nav, modal, filter, scroll reveal, counters, form
│
└── assets/
    ├── images/             ← Place local images here (currently using Unsplash CDN)
    └── icons/              ← Favicon, apple-touch-icon etc.
```

## Features
- Full-bleed cinematic hero with parallax zoom
- Scrolling certification marquee strip
- Scroll-reveal animations (IntersectionObserver)
- Animated stat counters
- Product filter tabs (by category)
- Rich product cards with Unsplash imagery
- Trust / credentials section with dark overlay
- Brands showcase (rendered from data.js)
- Contact form with success state
- Google Maps embed
- Product detail modals with specs, ingredients, CTA
- Fully responsive (mobile drawer nav)

## How to Run
Open `index.html` in any modern browser — no build step required.

## Adding a Product
1. Add entry to `PRODUCTS` in `js/data.js`
2. Add the corresponding `.pcard` HTML in the correct `.cat-row` in `index.html`
3. Optionally add to `BRANDS` array in `js/data.js`

## Replacing Unsplash Images with Local Assets
Replace `imgSrc` URLs in `js/data.js` with `assets/images/your-file.jpg`
and update `src` attributes in `index.html` hero/about sections accordingly.
