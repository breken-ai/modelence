/**
 * Appends an already-encoded query string to a configured redirect URL. The
 * URL may carry its own query (e.g. `/auth?view=reset`), in which case the new
 * parameters are joined with `&` so the app still sees both.
 */
export function appendQuery(url: string, query: string): string {
  return `${url}${url.includes('?') ? '&' : '?'}${query}`;
}
