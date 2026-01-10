// Use a configurable API base if provided by Vite or a bootstrap script. Fall
// back to a relative path so the client talks to the same origin in production
// and the build does not embed a localhost:4000 literal.
const API_BASE = (() => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_FREEMIUS_API_URL) {
    return import.meta.env.VITE_FREEMIUS_API_URL;
  }
  if (typeof window !== 'undefined' && window.__FREEMIUS_API_URL) {
    return window.__FREEMIUS_API_URL;
  }
  // Default to empty string so fetch(`${API_BASE}/freemius`) -> `/freemius`.
  return '';
})();

export async function fetchFreemiusConfig() {
  try {
    const res = await fetch(`${API_BASE}/freemius`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch Freemius config:', err);
    return null;
  }
}

export async function createFreemiusCheckout(options = {}) {
  try {
    const res = await fetch(`${API_BASE}/create-checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    });
    if (!res.ok) throw new Error('Failed to create checkout');
    return await res.json();
  } catch (err) {
    console.error('createFreemiusCheckout error:', err);
    return null;
  }
}

export async function openFreemiusCheckout(config, options = {}) {
  // Call server to create a checkout session and open returned URL.
  const payload = await createFreemiusCheckout({ planId: options.planId });
  if (payload && payload.checkout_url) {
    window.open(payload.checkout_url, '_blank');
  } else {
    console.warn('Checkout URL not available; see server logs.');
  }
}
