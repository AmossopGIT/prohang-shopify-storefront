import type { LoaderFunctionArgs } from '@shopify/remix-oxygen';

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = new URL(request.url).origin;
  
  // Define all your pages with priorities and change frequencies
  const routes = [
    {
      url: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/collections/all`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/book-installation`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/service-areas`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/cart`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.3
    }
  ];

  // Add service area pages (South African cities)
  const serviceAreas = [
    'johannesburg', 'cape-town', 'durban', 'pretoria', 'port-elizabeth',
    'bloemfontein', 'east-london', 'pietermaritzburg', 'polokwane',
    'kimberley', 'rustenburg', 'witbank', 'centurion', 'sandton',
    'randburg', 'roodepoort', 'stellenbosch', 'somerset-west', 'paarl'
  ];

  serviceAreas.forEach(area => {
    routes.push({
      url: `${baseUrl}/service-areas/${area}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
} 