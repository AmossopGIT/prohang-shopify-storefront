import type {MetaFunction, LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';
import {useState} from 'react';

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
  specifications?: {
    material: string;
    length: string;
    warranty: string;
    installation: string;
    maintenance: string;
  };
};

export const meta: MetaFunction<typeof loader> = ({data}) => {
  if (!data?.product) {
    return [
      {title: 'Product Not Found | ProHang South Africa'},
      {name: 'description', content: 'The requested product could not be found.'},
    ];
  }

  const {product} = data;
  return [
    {title: `${product.title} | ProHang South Africa`},
    {name: 'description', content: product.description},
    {name: 'keywords', content: `${product.title}, washing lines, aluminum, South Africa, ProHang`},
    {property: 'og:title', content: product.title},
    {property: 'og:description', content: product.description},
    {property: 'og:image', content: product.featuredImage.url},
    {property: 'og:type', content: 'product'},
  ];
};

// Mock products data (same as collections page)
const mockProducts: ProductType[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'prohang-1-5m-aluminum-washing-line',
    title: 'ProHang 1.5m Aluminum Washing Line',
    description: 'Our bestselling 1.5m aluminum washing line is perfect for small spaces and apartments. The wall-mounted foldaway design saves space when not in use, while the rust-free aluminum construction ensures years of maintenance-free operation. Proudly manufactured in South Africa for South African conditions.',
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
    features: ['Rust-free aluminum construction', 'Maintenance-free operation', 'Wall-mounted foldaway design', 'Perfect for small spaces', 'Easy installation process', 'Made in South Africa'],
    badge: 'BESTSELLER',
    specifications: {
      material: 'Premium rust-free aluminum',
      length: '1.5 meters',
      warranty: '2-year comprehensive warranty',
      installation: 'Professional installation included',
      maintenance: 'Maintenance-free'
    },
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
    description: 'Our premium 2m rust-free aluminum washing line comes with FREE professional installation included. This maintenance-free design is perfect for medium to large households, providing ample hanging space while maintaining the sleek, modern aesthetic that ProHang is known for.',
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
    features: ['FREE professional installation', 'Rust-free aluminum construction', '2m extended length', 'Maintenance-free operation', 'Professional service included', '2-year comprehensive warranty'],
    badge: 'FREE INSTALL',
    originalPrice: '3200.00',
    specifications: {
      material: 'Premium rust-free aluminum',
      length: '2 meters',
      warranty: '2-year comprehensive warranty',
      installation: 'FREE professional installation',
      maintenance: 'Maintenance-free'
    },
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
    description: 'Complete your ProHang washing line system with our premium aluminum pegs. These high-quality pegs are designed to never rust, break, or stain your clothes. Each pack contains 24 pegs, providing the perfect accessory for your ProHang washing line system.',
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
    features: ['Never rust or corrode', 'Won\'t break or snap', 'No staining on clothes', 'Premium aluminum construction', 'Long-lasting durability', '24 pegs per pack'],
    badge: 'ACCESSORY',
    specifications: {
      material: 'Premium rust-free aluminum',
      length: 'Standard peg size',
      warranty: '1-year warranty',
      installation: 'No installation required',
      maintenance: 'Maintenance-free'
    },
    variants: {
      nodes: [{
        id: 'gid://shopify/ProductVariant/3',
        availableForSale: true,
        selectedOptions: [{name: 'Title', value: 'Default Title'}]
      }]
    }
  }
];

export async function loader({params}: LoaderFunctionArgs) {
  const {handle} = params;
  
  // Find product by handle
  const product = mockProducts.find(p => p.handle === handle);
  
  if (!product) {
    throw new Response('Product not found', {status: 404});
  }

  return json({product});
}

export default function ProductPage() {
  const {product} = useLoaderData<typeof loader>();
  const [quantity, setQuantity] = useState(1);
  
  const formatPrice = (amount: string, currencyCode: string) => {
    return currencyCode === 'ZAR' ? `R${parseInt(amount)}` : `${currencyCode} ${amount}`;
  };

  const calculateSavings = (originalPrice: string, currentPrice: string) => {
    return parseInt(originalPrice) - parseInt(currentPrice);
  };

  const variant = product.variants.nodes[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="prohang-section">
        <div className="prohang-container">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link to="/" className="hover:text-prohang-navy transition-colors">Home</Link>
              <span>›</span>
              <Link to="/collections/all" className="hover:text-prohang-navy transition-colors">Products</Link>
              <span>›</span>
              <span className="text-prohang-navy">{product.title}</span>
            </div>
          </nav>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              {product.badge && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${
                  product.badge === 'BESTSELLER' ? 'bg-prohang-lime text-prohang-navy' :
                  product.badge === 'FREE INSTALL' ? 'bg-prohang-navy text-white' :
                  'bg-prohang-light-blue text-prohang-navy'
                }`}>
                  {product.badge}
                </div>
              )}
              
              {product.originalPrice && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                  SAVE R{calculateSavings(product.originalPrice, product.priceRange.minVariantPrice.amount)}
                </div>
              )}

              <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden bg-prohang-light-blue/20">
                <img 
                  src={product.featuredImage.url} 
                  alt={product.featuredImage.altText}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="prohang-heading-xl mb-4">{product.title}</h1>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-prohang-navy">
                      {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        R{parseInt(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <p className="prohang-text-body mb-6 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="prohang-heading-sm mb-3">Key Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-prohang-lime mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              {variant?.availableForSale && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label htmlFor="quantity" className="font-medium">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button 
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <input 
                        id="quantity"
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 text-center py-2 border-0 focus:ring-0"
                        min="1"
                      />
                      <button 
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <CartForm
                    route="/cart"
                    inputs={{
                      lines: [{
                        merchandiseId: variant.id,
                        quantity: quantity,
                      }],
                    }}
                    action={CartForm.ACTIONS.LinesAdd}
                  >
                    {(fetcher) => (
                      <button 
                        type="submit"
                        disabled={fetcher.state !== 'idle'}
                        className="prohang-btn-primary w-full py-4 text-lg"
                      >
                        {fetcher.state !== 'idle' ? 'Adding...' : `Add ${quantity} to Cart`}
                      </button>
                    )}
                  </CartForm>
                  
                  {product.handle.includes('washing-line') && (
                    <Link
                      to="/book-installation"
                      className="block w-full bg-prohang-lime text-prohang-navy py-4 px-4 rounded-lg font-semibold hover:bg-prohang-lime/90 transition-colors text-center text-lg"
                    >
                      Book Free Installation
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Product Specifications */}
          {product.specifications && (
            <div className="bg-prohang-light-blue/10 rounded-lg p-8 mb-16">
              <h2 className="prohang-heading-lg mb-6 text-center">Product Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <h3 className="font-semibold text-prohang-navy mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products / Cross-sell */}
          <section className="mb-16">
            <h2 className="prohang-heading-lg mb-8 text-center">Complete Your Setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts
                .filter(p => p.handle !== product.handle)
                .slice(0, 3)
                .map((relatedProduct) => {
                  const relatedVariant = relatedProduct.variants.nodes[0];
                  return (
                    <div key={relatedProduct.id} className="prohang-card p-6 text-center group hover:-translate-y-2">
                      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-prohang-light-blue/20">
                        <img 
                          src={relatedProduct.featuredImage.url} 
                          alt={relatedProduct.featuredImage.altText}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold mb-2">{relatedProduct.title}</h3>
                      <p className="text-2xl font-bold text-prohang-navy mb-4">
                        {formatPrice(relatedProduct.priceRange.minVariantPrice.amount, relatedProduct.priceRange.minVariantPrice.currencyCode)}
                      </p>
                      <Link
                        to={`/products/${relatedProduct.handle}`}
                        className="prohang-btn-secondary w-full"
                      >
                        View Details
                      </Link>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 