/**
 * Progressive enhancement for the command bar.
 *
 * Every command here is a shortcut for something already reachable by
 * scrolling or clicking — the page is fully usable with this script absent.
 */

const THEMES = ['darker', 'palenight', 'ocean', 'lighter'] as const;
type Theme = (typeof THEMES)[number];

const SECTION_ALIASES: Record<string, string> = {
  about: 'about',
  whoami: 'about',
  research: 'research',
  publications: 'publications',
  pubs: 'publications',
  papers: 'publications',
  news: 'news',
  education: 'education',
  edu: 'education',
  projects: 'projects',
  contact: 'contact',
};

/* ------------------------------------------------------------ chrome size */

/**
 * Publish the sticky nav's height so anchor scrolling clears it. The nav wraps
 * to more rows as the viewport narrows, so this is measured rather than fixed.
 */
const chrome = document.querySelector<HTMLElement>('.chrome');
if (chrome) {
  const syncChromeHeight = () =>
    document.documentElement.style.setProperty('--chrome-h', `${chrome.offsetHeight}px`);
  syncChromeHeight();
  new ResizeObserver(syncChromeHeight).observe(chrome);
}

const form = document.querySelector<HTMLFormElement>('#cmd-form');
const input = document.querySelector<HTMLInputElement>('#cmd-input');
const output = document.querySelector<HTMLElement>('#cmd-output');
const themeSelect = document.querySelector<HTMLSelectElement>('#theme-select');

/* ------------------------------------------------------------------ theme */

function readStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem('theme');
    return THEMES.includes(saved as Theme) ? (saved as Theme) : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeSelect) themeSelect.value = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* storage blocked — the theme still applies for this page view */
  }
}

// The inline head script already set the attribute; sync the <select> to match.
const initialTheme = readStoredTheme() ?? 'darker';
document.documentElement.setAttribute('data-theme', initialTheme);
if (themeSelect) {
  themeSelect.value = initialTheme;
  themeSelect.addEventListener('change', () => applyTheme(themeSelect.value as Theme));
}

/* ----------------------------------------------------------------- output */

function print(text: string, isError = false): void {
  if (!output) return;
  const line = document.createElement('div');
  if (isError) line.className = 'cmdbar__error';
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function echo(command: string): void {
  if (!output) return;
  const line = document.createElement('div');
  line.className = 'muted';
  line.textContent = `$ ${command}`;
  output.appendChild(line);
}

function clearOutput(): void {
  if (output) output.replaceChildren();
}

/* --------------------------------------------------------------- commands */

function goTo(section: string): void {
  const target = document.getElementById(section);
  if (!target) {
    print(`cd: no such section: ${section}`, true);
    return;
  }
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${section}`);
  print(`~/${section}`);
}

const HELP = [
  'available commands:',
  '  help              show this message',
  '  ls                list sections',
  '  cd <section>      jump to a section',
  '  open cv|github|linkedin|email',
  '  theme [name]      switch palette (darker, palenight, ocean, lighter)',
  '  clear             clear this output',
  '',
  'everything here is also reachable by scrolling or using the nav above.',
].join('\n');

function run(raw: string): void {
  const [name = '', ...args] = raw.trim().split(/\s+/);
  const arg = args[0]?.toLowerCase() ?? '';

  switch (name.toLowerCase()) {
    case 'help':
    case '?':
      print(HELP);
      return;

    case 'ls':
    case 'dir':
      print(Object.keys(SECTION_ALIASES).filter((k) => SECTION_ALIASES[k] === k).join('  '));
      return;

    case 'cd':
    case 'goto':
    case 'cat': {
      if (!arg) {
        print(`${name}: missing section name. try \`ls\`.`, true);
        return;
      }
      const section = SECTION_ALIASES[arg.replace(/^[~/]+|\/$|\.\w+$/g, '')];
      if (!section) {
        print(`${name}: no such section: ${arg}`, true);
        return;
      }
      goTo(section);
      return;
    }

    case 'open': {
      const targets: Record<string, string> = {
        cv: '/cv.pdf',
        github: 'https://github.com/ff-zhang',
        linkedin: 'https://www.linkedin.com/in/felixfzhang/',
        email: 'mailto:felixf.zhang@utoronto.ca',
      };
      const href = targets[arg];
      if (!href) {
        print(`open: unknown target: ${arg || '(none)'}`, true);
        return;
      }
      print(`opening ${href}`);
      window.open(href, arg === 'email' ? '_self' : '_blank', 'noopener');
      return;
    }

    case 'theme': {
      if (!arg) {
        print(`themes: ${THEMES.join(', ')}`);
        return;
      }
      if (!THEMES.includes(arg as Theme)) {
        print(`theme: unknown theme: ${arg}`, true);
        return;
      }
      applyTheme(arg as Theme);
      print(`theme set to ${arg}`);
      return;
    }

    case 'whoami':
      print('Felix Zhang — M.Sc. student in Computer Science, University of Toronto');
      return;

    case 'pwd':
      print('/home/felix');
      return;

    case 'clear':
      clearOutput();
      return;

    case '':
      return;

    default:
      print(`${name}: command not found. try \`help\`.`, true);
  }
}

/* ------------------------------------------------------------------ input */

if (form && input) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim();
    input.value = '';
    if (!value) return;
    echo(value);
    run(value);
  });
}
