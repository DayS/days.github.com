import { Helmet } from 'react-helmet-async';
import { socialLinks } from '../data/socialLinks';
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

export function SEO({
  title = 'Damien Villeneuve - Full-stack Product Engineer',
  description = 'Je conçois des apps mobiles, sites web, back‑ends, et j\'explore la GenAI pour accélérer l\'innovation produit.',
  canonical = 'https://dvilleneuve.fr/',
  image = '/images/og-image.jpg',
}: SEOProps) {
  const siteUrl = 'https://dvilleneuve.fr';

  const links = socialLinks.map((link) => link.url);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Damien Villeneuve" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Damien Villeneuve',
          jobTitle: 'Full-stack Product Engineer',
          url: siteUrl,
          sameAs: links,
        })}
      </script>
    </Helmet>
  );
} 