import type {MetaFunction, LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link, Form, useSearchParams} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';

// Product type matching our mock data structure
type ProductType = {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    }
  };
  featuredImage: {
    url: string;
    altText: string;
  };
  features: string[];
  badge?: string;
  originalPrice?: string;
  variants: {
    nodes: Array<{
      id: string;
      availableForSale: boolean;
      selectedOptions: Array<{
        name: string;
        value: string;
      }>;
    }>;
  };
};

export const meta: MetaFunction = () => {
  return [
    {title: 'Search Products | ProHang South Africa'},
    {name: 'description', content: 'Search our premium aluminum washing lines, pegs, and accessories. Find the perfect solution for your home.'},
    {name: 'keywords', content: 'search, washing lines, aluminum, pegs, ProHang, South Africa'},
  ];
};

// Mock products data (same as collections page)
const mockProducts: ProductType[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'prohang-1-5m-aluminum-washing-line',
    title: 'ProHang 1.5m Aluminum Washing Line',
    description: 'Rust-free, maintenance-free 1.5m aluminum washing line. Perfect for small spaces and apartments. Wall-mounted foldaway design saves space when not in use.',
    priceRange: {
      minVariantPrice: {
        amount: '2500.00',
        currencyCode: 'ZAR'
      }
    },
    featuredImage: {
      url: '/prohang-lines.png',
      altText: 'ProHang 1.5m Aluminum Washing Line - Rust Free Wall Mounted'
    },
    features: ['Rust-free aluminum', 'Maintenance-free', 'Wall-mounted foldaway', 'Perfect for small spaces', 'Easy installation'],
    badge: 'BESTSELLER',
    variants: {
      nodes: [{
        id: 'gid://shopify/ProductVariant/1',
        availableForSale: true,
        selectedOptions: [{name: 'Title', value: 'Default Title'}]
      }]
    }
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'prohang-2m-aluminum-washing-line-free-installation',
    title: 'ProHang 2m Aluminum Washing Line + Free Installation',
    description: 'Premium 2m rust-free aluminum washing line with FREE professional installation included. Maintenance-free design perfect for medium to large households.',
    priceRange: {
      minVariantPrice: {
        amount: '2750.00',
        currencyCode: 'ZAR'
      }
    },
    featuredImage: {
      url: '/prohang-lines-pegs.png',
      altText: 'ProHang 2m Aluminum Washing Line with Free Installation'
    },
    features: ['FREE Installation', 'Rust-free aluminum', '2m length', 'Maintenance-free', 'Professional service', '2-year warranty'],
    badge: 'FREE INSTALL',
    originalPrice: '3200.00',
    variants: {
      nodes: [{
        id: 'gid://shopify/ProductVariant/2',
        availableForSale: true,
        selectedOptions: [{name: 'Title', value: 'Default Title'}]
      }]
    }
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'prohang-aluminum-pegs-accessory-pack',
    title: 'ProHang Aluminum Pegs - Accessory Pack',
    description: 'Premium aluminum pegs that never rust, break, or stain your clothes. Perfect accessory for your ProHang washing line system.',
    priceRange: {
      minVariantPrice: {
        amount: '149.00',
        currencyCode: 'ZAR'
      }
    },
    featuredImage: {
      url: '/prohang-peg.png',
      altText: 'ProHang Aluminum Pegs - Rust Free Washing Line Accessory'
    },
    features: ['Never rust', 'Won\'t break', 'No staining', 'Premium aluminum', 'Long-lasting'],
    badge: 'ACCESSORY',
    variants: {
      nodes: [{
        id: 'gid://shopify/ProductVariant/3',
        availableForSale: true,
        selectedOptions: [{name: 'Title', value: 'Default Title'}]
      }]
    }
  }
];

export async function loader({request}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';
  
  // Simple search functionality
  const searchResults = query 
    ? mockProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return json({
    query,
    searchResults,
    totalResults: searchResults.length,
  });
}

export default function SearchPage() {
  const {query, searchResults, totalResults} = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  const formatPrice = (amount: string, currencyCode: string) => {
    return currencyCode === 'ZAR' ? `R${parseInt(amount)}` : `${currencyCode} ${amount}`;
  };

  const calculateSavings = (originalPrice: string, currentPrice: string) => {
    return parseInt(originalPrice) - parseInt(currentPrice);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Search Hero Section */}
      <section className="bg-gradient-to-r from-prohang-dark-navy to-prohang-navy text-white py-16">
        <div className="prohang-container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="prohang-heading-xl mb-4">Search Products</h1>
            <p className="prohang-text-lead mb-8">
              Find the perfect washing line solution for your home
            </p>
            
            {/* Search Form */}
            <Form method="get" className="relative">
              <div className="flex">
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search for washing lines, pegs, accessories..."
                  className="flex-1 px-6 py-4 text-lg text-gray-900 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-prohang-lime"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-prohang-lime text-prohang-navy font-semibold rounded-r-lg hover:bg-prohang-lime/90 transition-colors"
                >
                  Search
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>

      <main className="prohang-section">
        <div className="prohang-container">
          {/* Search Results Header */}
          {query && (
            <div className="mb-8">
              <h2 className="prohang-heading-lg mb-2">
                {totalResults > 0 
                  ? `${totalResults} result${totalResults === 1 ? '' : 's'} for "${query}"`
                  : `No results found for "${query}"`
                }
              </h2>
              {totalResults === 0 && (
                <p className="text-gray-600">
                  Try searching for "washing line", "aluminum", "pegs", or "installation"
                </p>
              )}
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="prohang-product-grid mb-16">
              {searchResults.map((product) => {
                const variant = product.variants.nodes[0];
                
                return (
                  <article 
                    key={product.id}
                    className="prohang-card p-6 text-center group hover:-translate-y-2 relative overflow-hidden"
                  >
                    {/* Product Badge */}
                    {product.badge && (
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${
                        product.badge === 'BESTSELLER' ? 'bg-prohang-lime text-prohang-navy' :
                        product.badge === 'FREE INSTALL' ? 'bg-prohang-navy text-white' :
                        'bg-prohang-light-blue text-prohang-navy'
                      }`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Savings Badge */}
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        SAVE R{calculateSavings(product.originalPrice, product.priceRange.minVariantPrice.amount)}
                      </div>
                    )}
                    
                    {/* Product Image */}
                    <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-prohang-light-blue/20 group-hover:scale-105 transition-all duration-300">
                      <img 
                        src={product.featuredImage.url} 
                        alt={product.featuredImage.altText}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <h3 className="prohang-heading-sm mb-2">{product.title}</h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-prohang-navy">
                          {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            R{parseInt(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{product.description}</p>

                    {/* Product Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-prohang-light-blue/20 text-prohang-navy px-2 py-1 rounded">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    {variant?.availableForSale && (
                      <div className="space-y-3">
                        <CartForm
                          route="/cart"
                          inputs={{
                            lines: [{
                              merchandiseId: variant.id,
                              quantity: 1,
                            }],
                          }}
                          action={CartForm.ACTIONS.LinesAdd}
                        >
                          {(fetcher) => (
                            <button 
                              type="submit"
                              disabled={fetcher.state !== 'idle'}
                              className="prohang-btn-primary w-full"
                            >
                              {fetcher.state !== 'idle' ? 'Adding...' : 'Add to Cart'}
                            </button>
                          )}
                        </CartForm>
                        
                        <Link
                          to={`/products/${product.handle}`}
                          className="prohang-btn-secondary w-full block text-center"
                          prefetch="intent"
                        >
                          View Details
                        </Link>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}

          {/* No Search Query */}
          {!query && (
            <div className="text-center py-16">
              <div className="max-w-2xl mx-auto">
                <h2 className="prohang-heading-lg mb-4">Popular Searches</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {['washing line', 'aluminum', 'pegs', 'installation', '1.5m', '2m'].map((term) => (
                    <Link
                      key={term}
                      to={`/search?q=${encodeURIComponent(term)}`}
                      className="inline-flex items-center px-4 py-2 bg-prohang-light-blue/20 text-prohang-navy rounded-lg hover:bg-prohang-navy hover:text-white transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
                
                <p className="prohang-text-body mb-8">
                  Or browse our complete product catalog
                </p>
                
                <Link to="/collections/all" className="prohang-btn-primary">
                  View All Products
                </Link>
              </div>
            </div>
          )}

          {/* No Results */}
          {query && searchResults.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-2xl mx-auto">
                <h2 className="prohang-heading-lg mb-4">No products found</h2>
                <p className="prohang-text-body mb-8">
                  We couldn't find any products matching "{query}". Try a different search term or browse our collections.
                </p>
                
                <div className="space-y-4">
                  <Link to="/collections/all" className="prohang-btn-primary">
                    View All Products
                  </Link>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/search?q=washing%20line" className="prohang-btn-secondary">
                      Search Washing Lines
                    </Link>
                    <Link to="/search?q=pegs" className="prohang-btn-secondary">
                      Search Pegs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 