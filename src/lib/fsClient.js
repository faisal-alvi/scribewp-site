import { API_BASE } from './freemius.js';

// Helper to dynamically load the Freemius checkout script and open the modal.
async function loadFreemiusScript() {
  if (window.FS) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://checkout.freemius.com/js/v1/';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = (e) => reject(new Error('Failed to load Freemius script'));
    document.head.appendChild(s);
  });
}

export async function openFreemiusModal({ product_id, plan_id, public_key, image, name, licenses, coupon }) {
  await loadFreemiusScript();

  if (!window.FS) throw new Error('Freemius FS object not available');

  // Attempt to retrieve sandbox params from backend.
  let sandbox = null;
  try {
    const res = await fetch(`${API_BASE}/freemius-sandbox`);
    if (res.status === 200) sandbox = await res.json();
  } catch (err) {
    // ignore — sandbox is optional
    console.warn('Could not fetch freemius sandbox params:', err);
  }

  // Freemius SDK API: `new FS.Checkout({...})` — all options passed to constructor,
  // then call handler.open() with no arguments.
  return new Promise((resolve) => {
    const handler = new window.FS.Checkout({
      plugin_id: String(product_id),
      plan_id: String(plan_id),
      public_key: String(public_key),
      image: image || undefined,
      name: name || 'Product',
      licenses: licenses || 1,
      // Pass coupon in two common keys in case SDK expects one or the other
      ...(coupon ? { coupon, coupon_code: coupon } : {}),
      ...(sandbox ? { sandbox } : {}),
      purchaseCompleted: (response) => {
        console.log('Freemius purchaseCompleted:', response);
      },
      success: (response) => {
        console.log('Freemius checkout success:', response);
        resolve(response);
      },
    });
    handler.open();
  });
}

export default { openFreemiusModal };
