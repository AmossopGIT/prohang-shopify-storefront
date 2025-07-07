import type { LoaderFunctionArgs } from '@shopify/remix-oxygen';

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = new URL(request.url).origin;
  
  const robotsTxt = `User-agent: *
Allow: /

# Important pages for washing line services in South Africa
Allow: /collections/all
Allow: /book-installation
Allow: /service-areas
Allow: /about
Allow: /contact

# Disallow admin and internal pages
Disallow: /admin/
Disallow: /api/
Disallow: /cart/
Disallow: /.well-known/
Disallow: /checkout/

# Disallow search result pages to avoid duplicate content
Disallow: /search?*
Disallow: /*?*sort=*
Disallow: /*?*filter=*

# Allow important assets
Allow: /images/
Allow: /assets/
Allow: /public/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for polite crawling
Crawl-delay: 1

# Specific instructions for major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
} 