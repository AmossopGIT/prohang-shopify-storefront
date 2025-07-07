import type {MetaFunction} from '@shopify/remix-oxygen';
import {Link} from '@remix-run/react';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    {title: 'Product Collections | ProHang South Africa'},
    {name: 'description', content: 'Browse our complete range of premium aluminum washing lines, pegs, and spare parts. Made in South Africa with professional installation.'},
    {name: 'keywords', content: 'washing lines, clothes lines, aluminum, pegs, spare parts, collections, South Africa'},
  ];
};

const collections = [
  {
    id: 'washing-lines',
    title: 'Washing Lines',
    description: 'Premium rust-free aluminum washing lines with professional installation',
    image: '/prohang-lines.png',
    href: '/collections/all?category=washing-lines',
    count: 2,
    featured: true,
  },
  {
    id: 'accessories',
    title: 'Accessories & Pegs',
    description: 'High-quality aluminum pegs and accessories for your washing line system',
    image: '/prohang-peg.png',
    href: '/collections/all?category=accessories',
    count: 1,
    featured: false,
  },
  {
    id: 'spare-parts',
    title: 'Spare Parts',
    description: 'Replacement parts and components for your ProHang washing line',
    image: '/prohang-lines-pegs.png',
    href: '/collections/all?category=spare-parts',
    count: 0,
    featured: false,
  },
];

export default function CollectionsIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-prohang-dark-navy to-prohang-navy text-white py-16">
        <div className="prohang-container text-center">
          <h1 className="prohang-heading-xl mb-4">Product Collections</h1>
          <p className="prohang-text-lead mb-8 max-w-3xl mx-auto">
            Discover our complete range of premium aluminum washing lines and accessories, 
            designed and manufactured in South Africa for South African conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-prohang-lime font-semibold">✓</span> Free Installation
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-prohang-lime font-semibold">✓</span> 2-Year Warranty
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-prohang-lime font-semibold">✓</span> Made in SA
            </div>
          </div>
        </div>
      </section>

      <main className="prohang-section">
        <div className="prohang-container">
          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={collection.href}
                className="group block"
              >
                <article className={`prohang-card p-6 text-center group-hover:-translate-y-2 relative overflow-hidden ${
                  collection.featured ? 'ring-2 ring-prohang-lime' : ''
                }`}>
                  {collection.featured && (
                    <div className="absolute top-4 left-4 bg-prohang-lime text-prohang-navy px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  
                  {/* Collection Image */}
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-prohang-light-blue/20 group-hover:scale-105 transition-all duration-300">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Collection Info */}
                  <h3 className="prohang-heading-sm mb-3">{collection.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{collection.description}</p>
                  
                  {/* Product Count */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-prohang-light-blue/20 text-prohang-navy">
                      {collection.count} {collection.count === 1 ? 'Product' : 'Products'}
                    </span>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="prohang-btn-secondary w-full group-hover:bg-prohang-navy group-hover:text-white transition-all duration-200">
                    Shop {collection.title}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <section className="bg-prohang-light-blue/10 rounded-lg p-8 mb-16">
            <h2 className="prohang-heading-lg mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/collections/all"
                className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="font-semibold text-prohang-navy group-hover:text-prohang-lime transition-colors">
                  View All Products
                </h3>
                <p className="text-sm text-gray-600">Browse our complete catalog</p>
              </Link>
              
              <Link
                to="/book-installation"
                className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-2xl mb-2">🏠</div>
                <h3 className="font-semibold text-prohang-navy group-hover:text-prohang-lime transition-colors">
                  Book Installation
                </h3>
                <p className="text-sm text-gray-600">Free professional setup</p>
              </Link>
              
              <Link
                to="/service-areas"
                className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold text-prohang-navy group-hover:text-prohang-lime transition-colors">
                  Service Areas
                </h3>
                <p className="text-sm text-gray-600">Check if we serve your area</p>
              </Link>
              
              <Link
                to="/contact"
                className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold text-prohang-navy group-hover:text-prohang-lime transition-colors">
                  Get Support
                </h3>
                <p className="text-sm text-gray-600">Contact our team</p>
              </Link>
            </div>
          </section>

          {/* Why Choose ProHang */}
          <section className="text-center">
            <h2 className="prohang-heading-lg mb-8">Why Choose ProHang?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="prohang-heading-sm mb-2">Premium Quality</h3>
                <p className="prohang-text-body">Rust-free aluminum construction designed to last for years</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="prohang-heading-sm mb-2">Professional Service</h3>
                <p className="prohang-text-body">Expert installation and comprehensive warranty included</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇿🇦</span>
                </div>
                <h3 className="prohang-heading-sm mb-2">Local Expertise</h3>
                <p className="prohang-text-body">Designed and manufactured in South Africa for local conditions</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 