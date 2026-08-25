import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';
import { parseBib } from './lib/bibtex';

const papers = defineCollection({
  loader: file('src/content/papers.bib', { parser: (text) => parseBib(text) }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    pages: z.string().optional(),
    published: z.boolean().default(true),
    selected: z.boolean().default(false),
    award: z.string().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    slides: z.string().optional(),
    video: z.string().optional(),
    website: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: file('src/content/news.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    // Kept as raw HTML so entries can carry a link without pulling in a
    // Markdown pipeline for one line of text.
    text: z.string(),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    detail: z.string().optional(),
    dates: z.string(),
    order: z.number().int(),
    awards: z
      .array(
        z.object({
          name: z.string(),
          amount: z.string().optional(),
          dates: z.string().optional(),
          declined: z.boolean().default(false),
        }),
      )
      .default([]),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    org: z.string().optional(),
    dates: z.string().optional(),
    description: z.string().optional(),
    href: z.string().optional(),
    group: z.enum(['project', 'experience']),
    order: z.number().int(),
  }),
});

export const collections = { papers, news, education, projects };
