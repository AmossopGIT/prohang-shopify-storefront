import {Link} from '@remix-run/react';

// Real Shopify product data structure
const products = [
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
    seo: {
      title: 'ProHang 1.5m Aluminum Washing Line | Rust-Free | R2500',
      description: 'Buy ProHang 1.5m aluminum washing line. Rust-free, maintenance-free, wall-mounted foldaway design. Perfect for small spaces. Free installation included.'
    },
    features: ['Rust-free aluminum', 'Maintenance-free', 'Wall-mounted foldaway', 'Perfect for small spaces', 'Easy installation'],
    badge: 'BESTSELLER'
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
    seo: {
      title: 'ProHang 2m Aluminum Washing Line + Free Installation | R2750',
      description: 'Premium 2m aluminum washing line with FREE installation. Rust-free, maintenance-free design. Professional installation service included at no extra cost.'
    },
    features: ['FREE Installation', 'Rust-free aluminum', '2m length', 'Maintenance-free', 'Professional service', '2-year warranty'],
    badge: 'FREE INSTALL',
    originalPrice: '3200.00'
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
    seo: {
      title: 'ProHang Aluminum Pegs | Rust-Free Washing Line Accessories | R149',
      description: 'Premium aluminum pegs for washing lines. Never rust, break, or stain clothes. Perfect accessory for ProHang washing line systems.'
    },
    features: ['Never rust', 'Won\'t break', 'No staining', 'Premium aluminum', 'Long-lasting'],
    badge: 'ACCESSORY'
  }
];

export function FeaturedProducts() {
  const formatPrice = (amount: string, currencyCode: string) => {
    return currencyCode === 'ZAR' ? `R${parseInt(amount)}` : `${currencyCode} ${amount}`;
  };

  const calculateSavings = (originalPrice: string, currentPrice: string) => {
    return parseInt(originalPrice) - parseInt(currentPrice);
  };

  return (
    <section className="prohang-section bg-white" itemScope itemType="https://schema.org/ItemList">
      <div className="prohang-container">
        <div className="text-center mb-16">
          <h2 className="prohang-heading-lg mb-4">Featured Washing Lines</h2>
          <p className="prohang-text-lead text-prohang-navy max-w-3xl mx-auto">
            Premium rust-free aluminum washing lines with free installation. 
            Maintenance-free design built for South African homes.
          </p>
        </div>
        
        <div className="prohang-product-grid">
          {products.map((product, index) => (
            <article 
              key={product.id}
              className="prohang-card p-6 text-center group hover:-translate-y-2 relative overflow-hidden"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
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
              
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-prohang-light-blue/20 group-hover:scale-105 transition-all duration-300">
                <img 
                  src={product.featuredImage.url} 
                  alt={product.featuredImage.altText}
                  className="w-full h-full object-cover object-center"
                  itemProp="image"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              
              <h3 className="prohang-heading-sm mb-2" itemProp="name">
                {product.title}
              </h3>
              
              <div className="mb-4" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-prohang-navy" itemProp="price" content={product.priceRange.minVariantPrice.amount}>
                    {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      R{parseInt(product.originalPrice)}
                    </span>
                  )}
                </div>
                                 <meta itemProp="priceCurrency" content={product.priceRange.minVariantPrice.currencyCode} />
                 <meta itemProp="availability" content="https://schema.org/InStock" />
                 <meta itemProp="url" content="/collections/all" />
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm" itemProp="description">
                {product.description}
              </p>

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
              
                             <div className="space-y-2">
                 <Link 
                   to="/collections/all"
                   className="prohang-btn-primary w-full block"
                   prefetch="intent"
                 >
                   View Details & Buy
                 </Link>
                 {product.handle.includes('washing-line') && (
                   <Link 
                     to="/book-installation"
                     className="text-sm text-prohang-navy hover:text-prohang-dark-navy font-medium transition-colors"
                     prefetch="intent"
                   >
                     🤙 Book Free Installation
                   </Link>
                 )}
               </div>

              {/* Structured Data */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": product.title,
                  "description": product.seo.description,
                  "image": product.featuredImage.url,
                  "brand": {
                    "@type": "Brand",
                    "name": "ProHang"
                  },
                                       "offers": {
                       "@type": "Offer",
                       "price": product.priceRange.minVariantPrice.amount,
                       "priceCurrency": product.priceRange.minVariantPrice.currencyCode,
                       "availability": "https://schema.org/InStock",
                       "url": "/collections/all"
                     }
                })
              }} />
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/collections/all" 
            className="prohang-btn-secondary"
            prefetch="intent"
          >
            View All Products
          </Link>
        </div>

        {/* Why Choose ProHang */}
        <div className="mt-16 bg-prohang-light-blue/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-prohang-navy mb-4">Why Choose ProHang?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-prohang-navy mb-2">Rust-Free</h4>
              <p className="text-sm text-gray-600">Premium aluminum never rusts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔧</span>
              </div>
              <h4 className="font-semibold text-prohang-navy mb-2">Maintenance-Free</h4>
              <p className="text-sm text-gray-600">Set and forget design</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏠</span>
              </div>
              <h4 className="font-semibold text-prohang-navy mb-2">Free Installation</h4>
              <p className="text-sm text-gray-600">Professional setup included</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💰</span>
              </div>
              <h4 className="font-semibold text-prohang-navy mb-2">Affordable</h4>
              <p className="text-sm text-gray-600">Quality at the right price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 