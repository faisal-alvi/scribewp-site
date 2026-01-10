import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, canonical, type = 'website', image, jsonLd }) => {
  const siteUrl = 'https://scribewp.com'; // Placeholder URL
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const defaultImage = 'https://images.unsplash.com/photo-1677696795198-5ac0e21060ed';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;