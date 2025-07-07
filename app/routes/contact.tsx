import type {MetaFunction} from '@shopify/remix-oxygen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    {title: 'Contact ProHang | Get Help & Support | South Africa'},
    {name: 'description', content: 'Contact ProHang for washing line support, installation quotes, or product information. Call, email, or visit our offices in Johannesburg, Cape Town, and Durban.'},
    {name: 'keywords', content: 'contact ProHang, customer support, installation quotes, South Africa, washing lines help'},
  ];
};

const offices = [
  {
    city: 'Johannesburg',
    address: '123 Industrial Road, Randburg, 2194',
    phone: '+27 11 123 4567',
    email: 'jhb@prohang.co.za',
    hours: 'Mon-Fri: 8AM-5PM, Sat: 8AM-2PM',
    isHeadquarters: true
  },
  {
    city: 'Cape Town',
    address: '456 Manufacturing Street, Bellville, 7530',
    phone: '+27 21 987 6543',
    email: 'cpt@prohang.co.za',
    hours: 'Mon-Fri: 8AM-5PM, Sat: 8AM-1PM',
    isHeadquarters: false
  },
  {
    city: 'Durban',
    address: '789 Commerce Avenue, Pinetown, 3610',
    phone: '+27 31 555 0123',
    email: 'dbn@prohang.co.za',
    hours: 'Mon-Fri: 8AM-5PM, Sat: 8AM-1PM',
    isHeadquarters: false
  }
];

const departments = [
  {
    name: 'Sales & Quotes',
    description: 'Product information and pricing',
    phone: '+27 11 123 4567',
    email: 'sales@prohang.co.za',
    hours: 'Mon-Fri: 8AM-5PM'
  },
  {
    name: 'Installation Bookings',
    description: 'Schedule your free installation',
    phone: '+27 11 123 4568',
    email: 'install@prohang.co.za',
    hours: 'Mon-Sat: 8AM-5PM'
  },
  {
    name: 'Customer Support',
    description: 'Help with existing products',
    phone: '+27 11 123 4569',
    email: 'support@prohang.co.za',
    hours: 'Mon-Fri: 8AM-5PM'
  },
  {
    name: 'Warranty Claims',
    description: 'Warranty and repair services',
    phone: '+27 11 123 4570',
    email: 'warranty@prohang.co.za',
    hours: 'Mon-Fri: 9AM-4PM'
  }
];

const inquiryTypes = [
  'Product Information',
  'Installation Quote',
  'Warranty Claim',
  'Technical Support',
  'Spare Parts',
  'General Inquiry'
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-prohang-navy to-prohang-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact ProHang
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-prohang-light">
              We're here to help • Fast response times • Expert support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">📞</span> Call Us
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">✉️</span> Email Us
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-prohang-lime font-semibold">🏢</span> Visit Us
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-prohang-navy mb-6">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="^(\+27|0)[0-9]{9}$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
                  placeholder="+27 or 0XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prohang-blue focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 text-prohang-blue focus:ring-prohang-blue border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  I agree to the processing of my personal information in accordance with ProHang's Privacy Policy (POPIA compliant) *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-prohang-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-prohang-blue transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-prohang-navy mb-6">Get Immediate Help</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-prohang-lime rounded-full flex items-center justify-center">
                    <span className="text-prohang-navy font-bold">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-prohang-navy">Call Now</div>
                    <div className="text-gray-600">+27 11 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-prohang-lime rounded-full flex items-center justify-center">
                    <span className="text-prohang-navy font-bold">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-prohang-navy">Email Us</div>
                    <div className="text-gray-600">info@prohang.co.za</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-prohang-lime rounded-full flex items-center justify-center">
                    <span className="text-prohang-navy font-bold">💬</span>
                  </div>
                  <div>
                    <div className="font-semibold text-prohang-navy">WhatsApp</div>
                    <div className="text-gray-600">+27 11 123 4567</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-prohang-navy mb-6">Contact by Department</h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-prohang-navy">{dept.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                    <div className="text-sm space-y-1">
                      <div><span className="font-medium">Phone:</span> {dept.phone}</div>
                      <div><span className="font-medium">Email:</span> {dept.email}</div>
                      <div><span className="font-medium">Hours:</span> {dept.hours}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-prohang-navy text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-prohang-lime">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-prohang-lime">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-prohang-light">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-prohang-light">
                  Emergency installation support available 24/7 for urgent repairs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-prohang-navy text-center mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="bg-white rounded-lg shadow-lg p-8 text-center">
                {office.isHeadquarters && (
                  <div className="inline-block bg-prohang-lime text-prohang-navy px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Headquarters
                  </div>
                )}
                <h3 className="text-2xl font-bold text-prohang-navy mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <div className="font-semibold text-prohang-navy">Address</div>
                    <div>{office.address}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-prohang-navy">Phone</div>
                    <div>{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-prohang-navy">Email</div>
                    <div>{office.email}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-prohang-navy">Hours</div>
                    <div>{office.hours}</div>
                  </div>
                </div>
                <button className="mt-6 bg-prohang-navy text-white py-2 px-6 rounded-lg hover:bg-prohang-blue transition-colors duration-200">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-prohang-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-prohang-navy mb-2">What is your response time?</h4>
              <p className="text-gray-600 mb-4">We respond to all inquiries within 2 hours during business hours, and within 24 hours on weekends.</p>

              <h4 className="font-semibold text-prohang-navy mb-2">Do you offer emergency repairs?</h4>
              <p className="text-gray-600 mb-4">Yes, we provide 24/7 emergency repair services for urgent washing line issues.</p>

              <h4 className="font-semibold text-prohang-navy mb-2">How do I track my installation appointment?</h4>
              <p className="text-gray-600">You'll receive SMS and email confirmations with tracking information once your appointment is scheduled.</p>
            </div>
            <div>
              <h4 className="font-semibold text-prohang-navy mb-2">What areas do you service?</h4>
              <p className="text-gray-600 mb-4">We service all major cities and towns across South Africa. Check our service areas page for details.</p>

              <h4 className="font-semibold text-prohang-navy mb-2">How long is the warranty?</h4>
              <p className="text-gray-600 mb-4">All ProHang products come with a minimum 2-year warranty, with lifetime warranties on premium models.</p>

              <h4 className="font-semibold text-prohang-navy mb-2">Can I visit your showroom?</h4>
              <p className="text-gray-600">Yes! Visit any of our offices to see our products in person and speak with our experts.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 