# Practice: Tribute Page and Flexbox

Practice files for the lesson **Practice: Tribute Page and Flexbox** in the C# Full-Stack Bootcamp on [ask-codey.com](https://www.ask-codey.com).

You'll build a small website, three pages or more, as a tribute to something you like: a favorite book series, band, team, game or film. Then you'll practice page layout with two free games.

## Part 1: your tribute site

Start from `index.html` and `styles.css` in this folder. Add at least two detail pages, such as `members.html` or `history.html`.

The home page needs:

- the title in a large heading, centered
- a picture, such as a book cover, a team logo or a band photo (put it in an `images` folder)
- a table of information with two or more columns, such as characters and the actors who play them
- two or three quotes, in a semantic quote element
- a list of two or three links to other websites
- links to your detail pages
- a heading for each section (the table, the quotes and the links), underlined

Style it with CSS:

- a font for the page
- a background color (and a text color that's easy to read on it)
- quotes in italics
- one element in a different font size
- try `line-height`, and see how it changes the page

Use semantic HTML: `header`, `nav`, `main`, `section`, `footer`, and the right element for each kind of content. Every page needs a valid HTML skeleton (`<!DOCTYPE html>`, `html`, `head` with a `title`, and `body`).

## Part 2: layout games

Play these two games on ask-codey.com, as far as you can get, to practice Flexbox and Grid:

- [Flex Freight](https://www.ask-codey.com/games/flex-freight), 32 puzzles with Flexbox
- [Grid Town](https://www.ask-codey.com/games/grid-town), 32 puzzles with Grid

Then use Flexbox or Grid on your tribute site: lay out the navigation links in a row, or the quotes in a grid.

## Check your work

`page.test.js` reads your home page and checks its structure: what a browser, a search engine and a screen reader rely on (the language, one `h1` in the header, the landmarks, alt text, the table's header row, the quotes, the sections' headings, and your detail pages). It doesn't judge how the pages look: Live Server is for that. It needs Node.js, which you installed in the first week. Open a terminal in this folder and run:

```bash
npm install
npm test
```

Run `npm install` once; after that, `npm test` is enough. At first most tests fail: that is expected (the starter already has a language and a title, so that one passes). Each part you add turns its test green, and a failing test's message says what's missing.

## Viewing your pages

Open the folder in VS Code and use the **Live Server** extension: right-click `index.html` and choose **Open with Live Server**. The page reloads in your browser every time you save.

## Pictures

Use pictures you're allowed to use: your own photos, or ones whose license allows it (Wikimedia Commons lists the license of each image, and NASA's images are free to use). Give every picture an `alt` text that describes it.

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
