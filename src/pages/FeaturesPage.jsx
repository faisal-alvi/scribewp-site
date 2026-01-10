import React from 'react';
import Features from '@/components/Features';
import FinalCTA from '@/components/FinalCTA';
import SEO from '@/components/SEO';

const FeaturesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Features - ScribeWP",
    "description": "Explore the powerful features of ScribeWP including AI content generation, Gutenberg support, and bulk post creation."
  };

  return (
    <>
      <SEO 
        title="Features - ScribeWP AI Writing Assistant"
        description="Discover how ScribeWP helps you write better content faster. Features include AI generation, SEO optimization, and bulk creation tools."
        canonical="/features"
        jsonLd={jsonLd}
      />
      <div className="pt-20">
        <div className="bg-purple-50 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All the Tools You Need</h1>
          <p className="text-xl text-gray-600">Supercharge your WordPress content strategy</p>
        </div>
        <Features />
        <FinalCTA />
      </div>
    </>
  );
};

export default FeaturesPage;