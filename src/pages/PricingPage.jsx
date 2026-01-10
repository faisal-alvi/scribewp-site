import React from 'react';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import SEO from '@/components/SEO';

const PricingPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "priceCurrency": "USD",
    "minPrice": "0",
    "maxPrice": "99"
  };

  return (
    <>
      <SEO 
        title="Pricing - ScribeWP Plans"
        description="Simple, transparent pricing for every content creator. Start for free and upgrade as you grow."
        canonical="/pricing"
        jsonLd={jsonLd}
      />
      <div className="pt-20">
        <Pricing />
        <FinalCTA />
      </div>
    </>
  );
};

export default PricingPage;