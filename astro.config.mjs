// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { parseBib } from './src/lib/bibtex';

const BIB_PATH = 'src/content/papers.bib';

/**
 * Fail the build on a malformed bibliography.
 *
 * Astro's `file()` loader catches parser exceptions and only logs them, so a
 * typo in papers.bib would otherwise publish a site with an empty publication
 * list and a green CI run. Parsing here, where a throw actually stops the
 * build, turns that silent failure into a loud one.
 *
 * @returns {import('astro').AstroIntegration}
 */
function validateBibliography() {
  return {
    name: 'validate-bibliography',
    hooks: {
      'astro:config:setup': () => {
        parseBib(readFileSync(BIB_PATH, 'utf8'));
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://ff-zhang.github.io',
  // Astro 7 defaults to 'jsx', which drops the whitespace before an inline
  // element that sits on its own line — so "the <a>University</a>" renders as
  // "theUniversity". This page is prose full of inline links; HTML whitespace
  // rules are the intuitive ones here, and the saving is negligible at 16KB.
  compressHTML: false,
  integrations: [validateBibliography(), sitemap()],
});
