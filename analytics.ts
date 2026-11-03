declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// gtag() is defined inline in index.html, so events queue in dataLayer even before gtag.js loads.
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  window.gtag?.('event', name, params);
}
