/** Site-wide constants, kept in one place so pages and metadata stay in sync. */
export const SITE = {
  name: 'Felix Zhang',
  title: 'Felix Zhang',
  description:
    'Felix Zhang is an M.Sc. student in Computer Science at the University of Toronto, ' +
    'working on data centre networking, operating systems, and data management.',
  url: 'https://ff-zhang.github.io',
  host: 'felixfzhang@cs.toronto.edu',
  affiliation: 'University of Toronto',
  affiliationUrl: 'https://www.utoronto.ca/',
  advisor: 'Qizhen Zhang',
  advisorUrl: 'https://qizhenzhang.me/',
  lab: 'Far Data Lab',
  labUrl: 'https://fardatalab.org/',
  email: 'felixf.zhang@utoronto.ca',
  github: 'https://github.com/ff-zhang',
  linkedin: 'https://www.linkedin.com/in/felixfzhang/',
  scholar: 'https://scholar.google.com/citations?user=78QtxrAAAAAJ&hl=en',
  cv: '/cv.pdf',

} as const;

/**
 * Author strings to bold in publication author lists. BibTeX entries may
 * spell the name a few ways, so match on any of them.
 */
const AUTHOR_ALIASES: string[] = ['Felix Zhang', 'Felix F. Zhang', 'Felix F Zhang'];

/** Is this author string the site owner? Used to bold the name in citations. */
export function isSiteAuthor(author: string): boolean {
  return AUTHOR_ALIASES.includes(author.trim());
}

/** Sections, in page order. Drives both the nav and the terminal's `ls`/`cd`. */
export const SECTIONS = [
  { id: 'about', nav: '~/about', command: 'whoami' },
  { id: 'research', nav: '~/research', command: 'cat research.md' },
  { id: 'publications', nav: '~/pubs', command: 'cat publications.bib' },
  { id: 'news', nav: '~/news', command: 'tail -f news.log' },
  { id: 'education', nav: '~/education', command: 'cd education && ls -l' },
  { id: 'projects', nav: '~/projects', command: 'ls projects/' },
  { id: 'contact', nav: '~/contact', command: 'cat contact.txt' },
] as const;
