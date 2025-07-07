import {useState} from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const serviceAreas = [
    'Johannesburg', 'Pretoria', 'Centurion', 'Sandton', 'Midrand',
    'Randburg', 'Roodepoort', 'Cape Town', 'Stellenbosch', 'Somerset West',
    'Paarl', 'Bellville', 'Durban', 'Pietermaritzburg', 'Newcastle',
    'Richards Bay', 'Port Elizabeth', 'Bloemfontein'
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-prohang-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-prohang-navy/80 text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 mb-16 rounded-2xl">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h2 className="prohang-heading-lg text-white mb-4">Get In Touch</h2>
            <p className="text-lg lg:text-xl text-white leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
              Ready to upgrade your washing line? Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-installation"
                className="bg-prohang-lime text-prohang-navy px-8 py-3 rounded-lg font-semibold text-lg hover:bg-prohang-lime/90 transition-colors duration-200"
              >
                📞 Book Free Consultation
              </a>
              <a
                href="/contact"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors duration-200"
              >
                💬 Get Quote
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/prohang-logo-white.png" 
                alt="ProHang Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-prohang-light-blue mb-6 leading-relaxed">
              South Africa's premier washing line specialists. Quality products, expert installation, and exceptional service since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-prohang-light-blue hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-prohang-light-blue hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.391 14.42c.687.687 1.625 1.111 2.669 1.111 2.068 0 3.744-1.675 3.744-3.744S11.128 7.043 9.06 7.043 5.316 8.718 5.316 10.787c0 1.044.424 1.982 1.111 2.669L5.156 14.727c-.807-.88-1.297-2.031-1.297-3.328 0-2.687 2.177-4.864 4.864-4.864s4.864 2.177 4.864 4.864-2.177 4.864-4.864 4.864z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">🏠 Home</a></li>
              <li><a href="/collections/all" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">📦 Shop Products</a></li>
              <li><a href="/book-installation" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">📅 Book Installation</a></li>
              <li><a href="/about" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">ℹ️ About Us</a></li>
              <li><a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">📞 Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">🔧 Installation Guide</a></li>
              <li><a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">🛡️ Warranty Info</a></li>
              <li><a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">❓ FAQ</a></li>
              <li><a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">🔄 Returns & Exchanges</a></li>
              <li><a href="/book-installation" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">📞 Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold">📧 info@prohang.co.za</p>
                <p className="text-prohang-light-blue text-sm">General inquiries</p>
              </div>
              <div>
                <p className="text-white font-semibold">📞 +27 11 123 4567</p>
                <p className="text-prohang-light-blue text-sm">Sales & bookings</p>
              </div>
              <div>
                <p className="text-white font-semibold">🛠️ +27 11 123 4568</p>
                <p className="text-prohang-light-blue text-sm">Customer support</p>
              </div>
              <div>
                <p className="text-white font-semibold">🏢 Office Hours</p>
                <p className="text-prohang-light-blue text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p className="text-prohang-light-blue text-sm">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/10 py-8">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">🌍 Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center">
            {['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London', 'Nelspruit', 'Polokwane', 'Kimberley', 'Rustenburg', 'Witbank'].map((city) => (
              <a 
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm py-1"
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-prohang-light-blue mb-4 md:mb-0">
              © 2024 ProHang Washing Lines. All rights reserved. | Deployed via Shopify Oxygen ⚡
            </p>
            <div className="flex space-x-6">
              <p className="text-prohang-light-blue text-sm">
                🇿🇦 Proudly South African | 🛡️ POPIA Compliant | 🔒 Secure Payments
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="/contact" className="text-prohang-light-blue hover:text-white transition-colors duration-200 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 