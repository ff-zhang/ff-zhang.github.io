// The published @retorquere/bibtex-parser package points its "types" field at
// dist/types/index.d.ts, which it does not actually ship. Declare the narrow
// slice of the API we use so `astro check` stays strict everywhere else.
declare module '@retorquere/bibtex-parser' {
  export interface Creator {
    lastName?: string;
    firstName?: string;
    prefix?: string;
    suffix?: string;
    name?: string;
  }

  export interface Entry {
    type: string;
    key: string;
    fields: Record<string, string | string[] | Creator[] | undefined>;
    input: string;
  }

  export interface ParseError {
    error: string;
    input?: string;
  }

  export interface Bibliography {
    entries: Entry[];
    errors: ParseError[];
  }

  export function parse(input: string, options?: Record<string, unknown>): Bibliography;
}
