import type {MetaFunction} from '@shopify/remix-oxygen';
import {Link} from '@remix-run/react';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    {title: 'Washing Line Installation Service Areas | ProHang South Africa'},
    {name: 'description', content: 'Professional washing line installation across South Africa. Currently serving Gauteng province including Johannesburg, Pretoria, Centurion, Randburg, Sandton, and surrounding areas. Free quotes available.'},
    {name: 'keywords', content: 'washing line installation, clothes line installation, Gauteng, Johannesburg, Pretoria, Centurion, Randburg, Sandton, South Africa, ProHang'},
    {name: 'geo.region', content: 'ZA-GP'},
    {name: 'geo.placename', content: 'Gauteng, South Africa'},
    {name: 'geo.position', content: '-26.2041;28.0473'},
    {name: 'ICBM', content: '-26.2041, 28.0473'},
    {property: 'og:title', content: 'Washing Line Installation Service Areas | ProHang South Africa'},
    {property: 'og:description', content: 'Professional washing line installation across South Africa. Currently serving Gauteng province. Free quotes and professional installation included.'},
    {property: 'og:type', content: 'website'},
    {property: 'og:locale', content: 'en_ZA'},
  ];
};

// Gauteng service areas with SEO-friendly data
const gautengAreas = [
  {
    name: 'Johannesburg',
    description: 'Professional washing line installation in Johannesburg and surrounding suburbs',
    suburbs: ['Sandton', 'Rosebank', 'Parktown', 'Melville', 'Greenside', 'Randburg'],
    population: '4.4 million',
    serviceRadius: '30km',
    installationTime: '2-3 hours'
  },
  {
    name: 'Pretoria',
    description: 'Expert washing line installation services in Pretoria and Tshwane Metro',
    suburbs: ['Centurion', 'Hatfield', 'Menlo Park', 'Lynnwood', 'Waterkloof', 'Brooklyn'],
    population: '2.9 million',
    serviceRadius: '25km',
    installationTime: '2-3 hours'
  },
  {
    name: 'East Rand',
    description: 'Quality washing line installation across the East Rand region',
    suburbs: ['Benoni', 'Boksburg', 'Germiston', 'Kempton Park', 'Edenvale', 'Bedfordview'],
    population: '1.8 million',
    serviceRadius: '20km',
    installationTime: '2-3 hours'
  },
  {
    name: 'West Rand',
    description: 'Professional washing line installation in West Rand communities',
    suburbs: ['Roodepoort', 'Krugersdorp', 'Randfontein', 'Westonaria', 'Carltonville'],
    population: '800,000',
    serviceRadius: '20km',
    installationTime: '2-3 hours'
  },
  {
    name: 'Vaal Triangle',
    description: 'Washing line installation services in the Vaal Triangle area',
    suburbs: ['Vereeniging', 'Vanderbijlpark', 'Sasolburg', 'Meyerton', 'Heidelberg'],
    population: '1.2 million',
    serviceRadius: '25km',
    installationTime: '2-3 hours'
  }
];

// Featured products for service areas
const featuredProducts = [
  {
    id: 1,
    name: 'ProHang Classic 4-Line',
    price: 'R299',
    originalPrice: 'R349',
    image: '/prohang-lines.png',
    features: ['4 retractable lines', 'Free installation', '2-year warranty'],
    popular: true
  },
  {
    id: 2,
    name: 'ProHang Deluxe 5-Line',
    price: 'R499',
    originalPrice: 'R599',
    image: '/prohang-lines-pegs.png',
    features: ['5 retractable lines', 'Stainless steel', '5-year warranty'],
    popular: false
  },
  {
    id: 3,
    name: 'ProHang Heavy Duty 6-Line',
    price: 'R699',
    originalPrice: null,
    image: '/prohang-lines.png',
    features: ['6 retractable lines', 'Commercial grade', 'Lifetime warranty'],
    popular: false
  }
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-prohang-dark-navy to-prohang-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Washing Line Installation<br />
              <span className="text-prohang-lime">Across South Africa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-prohang-light">
              Professional installation services currently available in Gauteng Province
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link
                to="/book-installation"
                className="bg-prohang-lime text-prohang-navy py-4 px-8 rounded-lg font-semibold text-lg hover:bg-prohang-lime/90 transition-colors duration-200"
              >
                Book Free Installation
              </Link>
              <Link
                to="/collections/all"
                className="bg-transparent border-2 border-prohang-lime text-prohang-lime py-4 px-8 rounded-lg font-semibold text-lg hover:bg-prohang-lime hover:text-prohang-navy transition-all duration-200"
              >
                View Washing Lines
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✓</span> Free Installation
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✓</span> 2-Year Warranty
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✓</span> Same Day Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Service Areas */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-prohang-navy mb-4">
              Currently Serving Gauteng Province
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional washing line installation across all major areas in Gauteng. 
              Our expert technicians ensure perfect installation every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gautengAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-prohang-navy">{area.name}</h3>
                    <div className="bg-prohang-lime/20 text-prohang-navy px-3 py-1 rounded-full text-sm font-semibold">
                      Available
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="text-prohang-lime mr-2">👥</span>
                      <span>Population: {area.population}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="text-prohang-lime mr-2">📍</span>
                      <span>Service Radius: {area.serviceRadius}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="text-prohang-lime mr-2">⏱️</span>
                      <span>Installation Time: {area.installationTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-prohang-navy mb-2">Key Suburbs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.suburbs.map((suburb, idx) => (
                        <span key={idx} className="bg-prohang-light-blue/20 text-prohang-navy px-2 py-1 rounded text-xs">
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/book-installation"
                    className="w-full bg-prohang-navy text-white py-3 px-4 rounded-lg font-semibold hover:bg-prohang-navy/80 transition-colors duration-200 text-center block"
                  >
                    Book Installation in {area.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-prohang-navy mb-4">
              Popular Washing Lines in Gauteng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular washing lines with free professional installation included
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {product.popular && (
                  <div className="bg-prohang-lime text-prohang-navy px-4 py-2 text-center font-semibold">
                    🌟 Most Popular
                  </div>
                )}
                
                <div className="aspect-square bg-prohang-light-blue/20 relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-prohang-lime text-prohang-navy px-2 py-1 rounded text-xs font-semibold">
                      SAVE R{parseInt(product.originalPrice.replace('R', '')) - parseInt(product.price.replace('R', ''))}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-prohang-navy mb-2">{product.name}</h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-prohang-navy">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="text-prohang-lime mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <Link
                      to="/collections/all"
                      className="w-full bg-prohang-navy text-white py-3 px-4 rounded-lg font-semibold hover:bg-prohang-navy/80 transition-colors duration-200 text-center block"
                    >
                      View Details & Buy
                    </Link>
                    <Link
                      to="/book-installation"
                      className="w-full bg-prohang-lime text-prohang-navy py-3 px-4 rounded-lg font-semibold hover:bg-prohang-lime/80 transition-colors duration-200 text-center block"
                    >
                      Book Installation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Options */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-prohang-navy mb-4">
              Installation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-prohang-light-blue/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold text-prohang-navy mb-4">
                Buy + Install
              </h3>
              <p className="text-gray-600 mb-6">
                Purchase one of our premium washing lines and get professional installation included absolutely free
              </p>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-prohang-lime mr-2">✓</span>
                  Free professional installation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-prohang-lime mr-2">✓</span>
                  2-year warranty on product & installation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-prohang-lime mr-2">✓</span>
                  Same day service available
                </li>
              </ul>
              <Link
                to="/collections/all"
                className="w-full bg-prohang-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-prohang-navy/80 transition-colors duration-200 block"
              >
                Shop Washing Lines
              </Link>
            </div>

            <div className="bg-prohang-lime/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-prohang-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-prohang-navy mb-4">
                Installation Only
              </h3>
              <p className="text-gray-600 mb-6">
                Already have a washing line? We'll install it professionally for you at an affordable rate
              </p>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-prohang-lime mr-2">✓</span>
                  Professional installation service
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-prohang-lime mr-2">✓</span>
                  1-year warranty on installation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-prohang-lime mr-2">✓</span>
                  Competitive pricing
                </li>
              </ul>
              <Link
                to="/book-installation"
                className="w-full bg-prohang-lime text-prohang-navy py-3 px-6 rounded-lg font-semibold hover:bg-prohang-lime/80 transition-colors duration-200 block"
              >
                Book Installation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="py-16 md:py-24 bg-prohang-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coming Soon to Other Provinces
            </h2>
            <p className="text-xl text-prohang-light max-w-3xl mx-auto">
              We're expanding our professional washing line installation services across South Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Western Cape</h3>
              <p className="text-sm text-prohang-light">Cape Town, Stellenbosch, Paarl</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">KwaZulu-Natal</h3>
              <p className="text-sm text-prohang-light">Durban, Pietermaritzburg</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free State</h3>
              <p className="text-sm text-prohang-light">Bloemfontein, Welkom</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Eastern Cape</h3>
              <p className="text-sm text-prohang-light">Port Elizabeth, East London</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-prohang-light mb-6">
              Want to be notified when we expand to your area?
            </p>
            <Link
              to="/contact"
              className="bg-prohang-lime text-prohang-navy py-3 px-8 rounded-lg font-semibold hover:bg-prohang-lime/90 transition-colors duration-200 inline-block"
            >
              Get Updates
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 