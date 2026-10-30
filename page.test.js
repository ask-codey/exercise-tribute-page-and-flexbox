// Checks your site's structure: what a browser, a search engine and a screen reader rely on. It doesn't judge
// how the pages look: open them with Live Server for that.
// Run it with: npm test (run npm install once first). You don't need to change this file.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const { JSDOM } = require('jsdom');

const read = (file) => new JSDOM(readFileSync(file, 'utf8')).window.document;
const page = read('index.html');
const all = (selector, doc = page) => [...doc.querySelectorAll(selector)];

test('the page says its language and has a title', () => {
  assert.ok(page.documentElement.lang, 'Give <html> a lang attribute, such as lang="en".');
  assert.ok(page.title.trim(), 'Give the page a <title>.');
});

test('one h1, in the header', () => {
  assert.equal(all('h1').length, 1, 'A page has exactly one <h1>: its title.');
  assert.ok(page.querySelector('header h1'), 'Put the <h1> inside the <header>.');
});

test('the landmarks: header, nav, main and footer', () => {
  for (const landmark of ['header', 'nav', 'main', 'footer']) {
    assert.ok(page.querySelector(landmark), `Add a <${landmark}>.`);
  }
});

test('every picture has alt text', () => {
  assert.ok(all('img').length > 0, 'Add a picture, such as a book cover, a team logo or a band photo.');
  for (const img of all('img')) {
    assert.ok(img.getAttribute('alt')?.trim(), `${img.getAttribute('src')} needs alt text that says what it shows.`);
  }
});

test('a table of information with a header row and two or more columns', () => {
  assert.ok(page.querySelector('table'), 'Add a table of information.');
  assert.ok(all('table th').length >= 2, 'Give the table a header row, with a <th> cell for each of its two or more columns.');
});

test('two or more quotes, in blockquote', () => {
  assert.ok(all('blockquote').length >= 2, 'Put each quote in its own <blockquote>.');
});

test('a list of links to other websites', () => {
  const outside = all('li a[href^="http"]');
  assert.ok(outside.length >= 2, 'Add a list (<ul> or <ol>) with two or three links to other websites.');
});

test('the table, the quotes and the links each sit in a section with a heading', () => {
  for (const [what, selector] of [['table', 'table'], ['quotes', 'blockquote'], ['links', 'li a[href^="http"]']]) {
    const section = page.querySelector(selector)?.closest('section');
    assert.ok(section, `Put the ${what} in a <section>.`);
    assert.ok(section.querySelector('h2, h3'), `Give the ${what}' section a heading, such as an <h2>.`);
  }
});

test('links to two or more detail pages, each a complete page', () => {
  const pages = new Set(all('a[href$=".html"]').map((a) => a.getAttribute('href')).filter((href) => !/^https?:/.test(href) && href !== 'index.html'));
  assert.ok(pages.size >= 2, 'Link to two or more pages of your own, such as members.html.');
  for (const file of pages) {
    assert.ok(existsSync(file), `${file} is linked, but there's no ${file} in this folder yet.`);
    const text = readFileSync(file, 'utf8');
    const detail = read(file);
    assert.match(text, /^\s*<!DOCTYPE html>/i, `${file} starts with <!DOCTYPE html>.`);
    assert.ok(detail.documentElement.lang, `${file}: give <html> a lang attribute.`);
    assert.ok(detail.title.trim(), `${file}: give the page a <title>.`);
  }
});
