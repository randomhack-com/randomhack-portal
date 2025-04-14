/**
 * Analytics utility module for the Randomhack Portal.
 * This module provides basic analytics tracking infrastructure.
 * No specific analytics provider is integrated at this stage.
 */

let analyticsEnabled = false;
let analyticsId: string | undefined = undefined;

/**
 * Initializes analytics tracking if enabled via environment variables.
 * Checks for VITE_ANALYTICS_ENABLED and VITE_ANALYTICS_ID.
 */
export function initAnalytics() {
  analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === 'true';
  analyticsId = import.meta.env.VITE_ANALYTICS_ID;
  if (analyticsEnabled) {
    // Placeholder for future provider setup
    console.info('[Analytics] Initialized. Analytics ID:', analyticsId);
  } else {
    console.info('[Analytics] Disabled.');
  }
}

/**
 * Tracks a page view event.
 * Logs the page path to the console if analytics is enabled.
 * @param path - The path of the page viewed.
 */
export function trackPageView(path: string) {
  if (analyticsEnabled) {
    console.info('[Analytics] Page view:', path);
    // Placeholder for future provider integration
  }
}

/**
 * Tracks a custom event.
 * Logs the event name and parameters to the console if analytics is enabled.
 * @param name - The name of the event.
 * @param params - Optional parameters for the event.
 */
export function trackEvent(name: string, params?: object) {
  if (analyticsEnabled) {
    console.info('[Analytics] Event:', name, params || {});
    // Placeholder for future provider integration
  }
}