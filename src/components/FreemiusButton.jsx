import React from 'react';
import { fetchFreemiusConfig, openFreemiusCheckout } from '../lib/freemius';

export default function FreemiusButton() {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    setLoading(true);
    const cfg = await fetchFreemiusConfig();
    if (!cfg) {
      setLoading(false);
      return;
    }
    await openFreemiusCheckout(cfg, { planId: 'default' });
    setLoading(false);
  }

  return (
    <button onClick={handleClick} disabled={loading} className="btn">
      {loading ? 'Loading…' : 'Open Freemius Checkout'}
    </button>
  );
}
