import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import SEO from '@/components/SEO';

const HomePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ScribeWP",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "WordPress",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered WordPress writing assistant plugin that helps you create content in seconds."
  };

  return (
    <>
      <SEO 
        title="ScribeWP - AI-Powered WordPress Writing Assistant"
        description="Create amazing WordPress content in seconds with AI. Generate high-quality blog posts, articles, and more with our advanced Gutenberg plugin."
        canonical="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default HomePage;