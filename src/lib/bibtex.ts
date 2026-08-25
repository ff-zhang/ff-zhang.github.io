import { parse, type Creator, type Entry } from '@retorquere/bibtex-parser';

/**
 * A publication, normalized out of a raw BibTeX entry into the shape the
 * templates render. `src/content/papers.bib` is the single source of truth;
 * this module is the only place that knows about BibTeX field names.
 *
 * Declared as a type alias rather than an interface so it satisfies Astro's
 * `Record<string, unknown>` loader output — only aliases get an implicit
 * index signature.
 */
export type Paper = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pages?: string;
  published: boolean;
  selected: boolean;
  award?: string;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  code?: string;
  slides?: string;
  video?: string;
  website?: string;
};

/** Coerce a parsed field to a single string, whatever list shape it came back as. */
function str(value: unknown): string | undefined {
  if (typeof value === 'string') return value.trim() || undefined;
  if (Array.isArray(value) && value.length > 0) return str(value[0]);
  return undefined;
}

/** Coerce a parsed field to a string list (`keywords` comes back as one). */
function list(value: unknown): string[] {
  if (typeof value === 'string') return value.split(',').map((s) => s.trim()).filter(Boolean);
  if (Array.isArray(value)) return value.flatMap((v) => list(v));
  return [];
}

/**
 * Render one parsed creator as "First von Last". The parser already splits
 * names and converts LaTeX escapes to Unicode, so there is no manual
 * "Last, First" reordering to do here.
 */
function formatAuthor(creator: Creator): string {
  if (creator.name) return creator.name;
  const parts = [creator.firstName, creator.prefix, creator.lastName, creator.suffix];
  return parts.filter(Boolean).join(' ').trim();
}

function formatAuthors(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return (value as Creator[])
    .map((c) => (typeof c === 'string' ? c : formatAuthor(c)))
    .filter(Boolean);
}

/**
 * Pick the venue for an entry. `booktitle` covers @inproceedings, `journal`
 * covers @article; the rest are fallbacks so an unusual entry type still
 * renders something rather than an empty string.
 */
function venueOf(entry: Entry): string {
  const venue =
    str(entry.fields.booktitle) ??
    str(entry.fields.journal) ??
    str(entry.fields.publisher) ??
    str(entry.fields.school) ??
    str(entry.fields.institution) ??
    str(entry.fields.howpublished);
  return venue ?? 'Manuscript';
}

function normalize(entry: Entry): Paper {
  const keywords = list(entry.fields.keywords).map((k) => k.toLowerCase());
  const year = Number.parseInt(str(entry.fields.year) ?? '', 10);

  if (!Number.isFinite(year)) {
    throw new Error(`BibTeX entry "${entry.key}" is missing a valid year field.`);
  }

  const title = str(entry.fields.title);
  if (!title) {
    throw new Error(`BibTeX entry "${entry.key}" is missing a title field.`);
  }

  return {
    id: entry.key,
    title,
    authors: formatAuthors(entry.fields.author),
    venue: venueOf(entry),
    year,
    pages: str(entry.fields.pages),
    // al-folio's convention, matching the reference bibliography: entries are
    // published unless explicitly tagged otherwise.
    published: !keywords.includes('not-published'),
    selected: keywords.includes('selected') || str(entry.fields.selected) === 'true',
    award: str(entry.fields.award),
    doi: str(entry.fields.doi),
    arxiv: str(entry.fields.arxiv),
    pdf: str(entry.fields.pdf),
    code: str(entry.fields.code),
    slides: str(entry.fields.slides),
    video: str(entry.fields.video),
    website: str(entry.fields.website),
  };
}

/**
 * Parse a .bib file into an array of papers for Astro's `file()` loader, which
 * keys each entry off its `id` property (here, the BibTeX cite key).
 *
 * Parse errors are thrown rather than skipped: a typo in the bibliography
 * should fail the build loudly instead of silently dropping a paper from the
 * publication list.
 */
export function parseBib(text: string): Paper[] {
  const bib = parse(text, {
    // Keep the author's own title casing. The parser sentence-cases by
    // default, which would turn "Seamless Stream Processing" into
    // "Seamless stream processing".
    sentenceCase: false,
  });

  if (bib.errors.length > 0) {
    const detail = bib.errors.map((e) => `  - ${e.error}`).join('\n');
    throw new Error(`Failed to parse src/content/papers.bib:\n${detail}`);
  }

  return bib.entries.map(normalize);
}

/** Build the outbound links for a paper, in the order they should render. */
export function paperLinks(paper: Paper): Array<{ label: string; href: string }> {
  const links: Array<{ label: string; href: string }> = [];
  if (paper.pdf) {
    // A bare filename refers to public/papers/; anything else is a full URL.
    links.push({
      label: 'pdf',
      href: /^https?:\/\//.test(paper.pdf) ? paper.pdf : `/papers/${paper.pdf}`,
    });
  }
  if (paper.arxiv) {
    links.push({
      label: 'arXiv',
      href: /^https?:\/\//.test(paper.arxiv) ? paper.arxiv : `https://arxiv.org/abs/${paper.arxiv}`,
    });
  }
  if (paper.doi) {
    links.push({
      label: 'doi',
      href: /^https?:\/\//.test(paper.doi) ? paper.doi : `https://doi.org/${paper.doi}`,
    });
  }
  if (paper.code) links.push({ label: 'code', href: paper.code });
  if (paper.slides) links.push({ label: 'slides', href: paper.slides });
  if (paper.video) links.push({ label: 'video', href: paper.video });
  if (paper.website) links.push({ label: 'www', href: paper.website });
  return links;
}

/** Group papers into descending-year buckets for rendering. */
export function byYear<T extends { year: number }>(papers: T[]): Array<[number, T[]]> {
  const groups = new Map<number, T[]>();
  for (const paper of papers) {
    const bucket = groups.get(paper.year);
    if (bucket) bucket.push(paper);
    else groups.set(paper.year, [paper]);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]);
}
