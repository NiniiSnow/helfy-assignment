Most sections are done, except for the second carousel section, due to time constraints. Styles and responsive design are applied as closely as possible to the original design.

The project includes a header, hero section with a feature list and rating badge, a testimonial carousel with pagination and swipe support, and a footer with social/partner links. Layout is responsive across desktop (1920px), small desktop/laptop (1280px), and mobile (390px) breakpoints, including a floating call-to-action button on mobile that hides/shows on scroll. Poppins and Roboto are used as the type system (headings vs. body text), with shared CSS variables for colors and spacing.

## Running the project

This is a plain HTML/CSS/JS project with no build step, but `index.html` loads its script as an ES module, so it must be served over `http://` rather than opened directly as a file. Serve the folder with any static server, e.g.:

```
python -m http.server 8080
```

Then open `http://localhost:8080` in the browser.
