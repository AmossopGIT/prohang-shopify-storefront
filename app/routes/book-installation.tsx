import type {MetaFunction} from '@shopify/remix-oxygen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';
import {useState} from 'react';
import {Link} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    {title: 'Book Free Installation | ProHang Washing Lines South Africa'},
    {name: 'description', content: 'Book your free washing line installation across South Africa. Professional service, 2-year warranty, and same-day quotes available.'},
    {name: 'keywords', content: 'washing line installation, free installation, South Africa, professional service, same-day quotes'},
  ];
};

const provinces = [
  'Eastern Cape',
  'Free State', 
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'Northern Cape',
  'North West',
  'Western Cape'
];

const propertyTypes = [
  'House',
  'Apartment',
  'Townhouse',
  'Complex',
  'Office Building',
  'Other'
];

// Currently serving Gauteng areas
const serviceAreas = [
  'Johannesburg', 'Pretoria', 'Centurion', 'Randburg', 'Sandton', 'Roodepoort',
  'Benoni', 'Boksburg', 'Germiston', 'Kempton Park', 'Edenvale', 'Bedfordview',
  'Krugersdorp', 'Vereeniging', 'Vanderbijlpark', 'Sasolburg', 'Meyerton'
];

// Available products
const products = [
  {
    id: 'prohang-classic-4-line',
    name: 'ProHang Classic 4-Line',
    price: 299,
    originalPrice: 349,
    image: '/prohang-lines.png',
    features: ['4 retractable lines', 'Easy wall mounting', '15m total line length', '2-year warranty']
  },
  {
    id: 'prohang-deluxe-5-line',
    name: 'ProHang Deluxe 5-Line',
    price: 499,
    originalPrice: 599,
    image: '/prohang-lines-pegs.png',
    features: ['5 retractable lines', 'Stainless steel components', '20m total line length', '5-year warranty']
  },
  {
    id: 'prohang-heavy-duty-6-line',
    name: 'ProHang Heavy Duty 6-Line',
    price: 699,
    originalPrice: null,
    image: '/prohang-lines.png',
    features: ['6 retractable lines', 'Heavy-duty aluminum frame', '25m total line length', 'Lifetime warranty']
  }
];

export default function BookInstallation() {
  const [serviceType, setServiceType] = useState<'buy-install' | 'install-only'>('buy-install');
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-prohang-dark-navy to-prohang-navy text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Book Your Installation
            </h1>
            <p className="text-lg md:text-xl mb-6 text-prohang-light">
              Professional installation across Gauteng • Same-day quotes • 2-year warranty
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                <span className="text-prohang-lime font-semibold">✓</span> Free Installation with Purchase
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                <span className="text-prohang-lime font-semibold">✓</span> Same-Day Quotes
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                <span className="text-prohang-lime font-semibold">✓</span> Professional Service
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Installation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-prohang-navy mb-6">
                Request Your Installation
              </h2>
              
              {/* Service Type Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-prohang-navy mb-4">Choose Your Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      serviceType === 'buy-install' 
                        ? 'border-prohang-lime bg-prohang-lime/10' 
                        : 'border-gray-300 hover:border-prohang-navy'
                    }`}
                    onClick={() => setServiceType('buy-install')}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="buy-install"
                        name="serviceType"
                        value="buy-install"
                        checked={serviceType === 'buy-install'}
                        onChange={(e) => setServiceType(e.target.value as 'buy-install' | 'install-only')}
                        className="mr-2"
                      />
                      <label htmlFor="buy-install" className="font-semibold text-prohang-navy">
                        Buy + Install
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Purchase a ProHang washing line and get FREE professional installation
                    </p>
                  </div>
                  
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      serviceType === 'install-only' 
                        ? 'border-prohang-lime bg-prohang-lime/10' 
                        : 'border-gray-300 hover:border-prohang-navy'
                    }`}
                    onClick={() => setServiceType('install-only')}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="install-only"
                        name="serviceType"
                        value="install-only"
                        checked={serviceType === 'install-only'}
                        onChange={(e) => setServiceType(e.target.value as 'buy-install' | 'install-only')}
                        className="mr-2"
                      />
                      <label htmlFor="install-only" className="font-semibold text-prohang-navy">
                        Installation Only
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Already have a washing line? We'll install it for you
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Selection for Buy + Install */}
              {serviceType === 'buy-install' && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-prohang-navy mb-4">Choose Your Washing Line</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {products.map((product) => (
                      <div 
                        key={product.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedProduct === product.id 
                            ? 'border-prohang-lime bg-prohang-lime/10' 
                            : 'border-gray-300 hover:border-prohang-navy'
                        }`}
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        <div className="flex items-start space-x-4">
                          <input
                            type="radio"
                            id={product.id}
                            name="selectedProduct"
                            value={product.id}
                            checked={selectedProduct === product.id}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-prohang-navy">{product.name}</h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-prohang-navy">R{product.price}</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {product.features.map((feature, idx) => (
                                <span key={idx} className="text-xs bg-prohang-light-blue/20 text-prohang-navy px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="^(\+27|0)[0-9]{9}$"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                      placeholder="+27 or 0XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    >
                      <option value="">Select your city</option>
                      {serviceAreas.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                      Province *
                    </label>
                    <select
                      id="province"
                      name="province"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    >
                      <option value="">Select province</option>
                      {provinces.map((province) => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      required
                      pattern="[0-9]{4}"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                      placeholder="7800"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Installation Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Installation Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="timePreference" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="timePreference"
                      name="timePreference"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="weekend">Weekend only</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-navy focus:border-transparent"
                    placeholder="Any special requirements, access instructions, or questions..."
                  ></textarea>
                </div>

                {/* Privacy Notice */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 h-4 w-4 text-prohang-navy focus:ring-prohang-navy border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      I agree to the processing of my personal information in accordance with ProHang's Privacy Policy (POPIA compliant) *
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      className="mt-1 h-4 w-4 text-prohang-navy focus:ring-prohang-navy border-gray-300 rounded"
                    />
                    <label htmlFor="marketing" className="text-sm text-gray-700">
                      I would like to receive updates about products and offers via email/SMS
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-prohang-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-prohang-navy/80 transition-colors duration-200 text-lg"
                >
                  {serviceType === 'buy-install' ? 'Book Installation & Purchase' : 'Book Installation Service'}
                </button>
              </form>
            </div>
          </div>

          {/* Information Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Currently Serving */}
            <div className="bg-prohang-lime/10 border border-prohang-lime rounded-lg p-6">
              <h3 className="text-lg font-bold text-prohang-navy mb-3">Currently Serving</h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">📍</span>
                <span className="font-semibold text-prohang-navy">Gauteng Province</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Professional installation available across all major Gauteng areas
              </p>
              <Link
                to="/service-areas"
                className="text-prohang-navy hover:text-prohang-navy/80 text-sm font-medium"
              >
                View all service areas →
              </Link>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-prohang-navy mb-4">Why Choose ProHang?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-prohang-lime text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-prohang-navy text-sm">Free Installation</h4>
                    <p className="text-gray-600 text-sm">With every washing line purchase</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-prohang-lime text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-prohang-navy text-sm">Professional Technicians</h4>
                    <p className="text-gray-600 text-sm">Trained and certified experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-prohang-lime text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-prohang-navy text-sm">2-Year Warranty</h4>
                    <p className="text-gray-600 text-sm">On parts and installation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-prohang-lime text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-prohang-navy text-sm">Same-Day Quotes</h4>
                    <p className="text-gray-600 text-sm">Quick response time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-prohang-navy text-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-prohang-lime">Phone</h4>
                  <p>+27 11 123 4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-prohang-lime">Email</h4>
                  <p>install@prohang.co.za</p>
                </div>
                <div>
                  <h4 className="font-semibold text-prohang-lime">Hours</h4>
                  <p>Monday - Friday: 8AM - 5PM<br />Saturday: 8AM - 2PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 