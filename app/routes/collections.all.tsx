import type {MetaFunction, LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';
import {useState, useEffect} from 'react';

// Product type matching Shopify structure
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
    {title: 'Shop Premium Washing Lines | ProHang South Africa'},
    {name: 'description', content: 'Browse our premium aluminum washing lines, pegs, and spare parts. Made in South Africa with free installation. Prices from R149.'},
    {name: 'keywords', content: 'washing lines, clothes lines, aluminum, pegs, spare parts, South Africa, installation'},
  ];
};

// Mock products using proper Shopify structure
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

export async function loader({context}: LoaderFunctionArgs) {
    return json({
      products: mockProducts,
    });
}

export default function CollectionsAll() {
  const {products} = useLoaderData<typeof loader>();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const formatPrice = (amount: string, currencyCode: string) => {
    return currencyCode === 'ZAR' ? `R${parseInt(amount)}` : `${currencyCode} ${amount}`;
  };

  const calculateSavings = (originalPrice: string, currentPrice: string) => {
    return parseInt(originalPrice) - parseInt(currentPrice);
  };

  // Category filtering
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'washing-lines', name: 'Washing Lines', count: products.filter(p => p.handle.includes('washing-line')).length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.badge === 'ACCESSORY').length },
    { id: 'spare-parts', name: 'Spare Parts', count: 0 },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => {
        switch (selectedCategory) {
          case 'washing-lines':
            return product.handle.includes('washing-line');
          case 'accessories':
            return product.badge === 'ACCESSORY';
          case 'spare-parts':
            return false; // No spare parts in current data
          default:
            return true;
        }
      });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-prohang-dark-navy to-prohang-navy text-white py-16">
        <div className="prohang-container text-center">
          <h1 className="prohang-heading-xl mb-4">Premium Washing Lines</h1>
          <p className="prohang-text-lead mb-8 max-w-3xl mx-auto">
              Professional installation included • 2-year warranty • Made in South Africa
            </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✓</span> Free Installation
              </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✓</span> 2-Year Warranty
              </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✓</span> South African Made
            </div>
          </div>
        </div>
      </section>

      <main className="prohang-section">
        <div className="prohang-container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                category.id === selectedCategory
                  ? 'bg-prohang-navy text-white shadow-lg'
                  : 'bg-white text-prohang-navy border border-prohang-navy hover:bg-prohang-navy hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

          {/* Products Grid */}
          <div className="prohang-product-grid">
            {filteredProducts.map((product) => {
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
                      
                      {product.handle.includes('washing-line') && (
                        <Link
                          to="/book-installation"
                          className="block w-full bg-prohang-lime text-prohang-navy py-3 px-4 rounded-lg font-semibold hover:bg-prohang-lime/90 transition-colors text-center"
                          prefetch="intent"
                        >
                          Book Installation
                        </Link>
                      )}
                    </div>
                  )}
                </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
              <h3 className="prohang-heading-md mb-4">No products found</h3>
              <p className="prohang-text-body mb-8">Try selecting a different category or check back later for new products.</p>
              <Link to="/contact" className="prohang-btn-primary">
              Contact Us
            </Link>
          </div>
        )}
      </div>
      </main>

      {/* Why Choose ProHang Section */}
      <section className="prohang-section bg-prohang-light-blue/10">
        <div className="prohang-container">
          <div className="text-center mb-12">
            <h2 className="prohang-heading-lg mb-4">Why Choose ProHang?</h2>
            <p className="prohang-text-lead max-w-2xl mx-auto">
              Our washing lines are designed and manufactured in South Africa for South African conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="prohang-heading-sm mb-2">Free Installation</h3>
              <p className="prohang-text-body">Professional installation included with every purchase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="prohang-heading-sm mb-2">2-Year Warranty</h3>
              <p className="prohang-text-body">Comprehensive warranty on all products and installation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇿🇦</span>
              </div>
              <h3 className="prohang-heading-sm mb-2">Made in SA</h3>
              <p className="prohang-text-body">Proudly South African made for local conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-prohang-navy text-white py-16">
        <div className="prohang-container text-center">
          <h2 className="prohang-heading-lg mb-4">Need Help Choosing?</h2>
          <p className="prohang-text-lead mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect washing line solution
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="prohang-btn-accent">
              Contact Us
            </Link>
            <Link
              to="/book-installation"
              className="bg-transparent border-2 border-prohang-lime text-prohang-lime py-3 px-8 rounded-lg font-semibold hover:bg-prohang-lime hover:text-prohang-navy transition-all duration-200"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 