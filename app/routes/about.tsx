import type {MetaFunction} from '@shopify/remix-oxygen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    {title: 'About ProHang | Premium Washing Lines Made in South Africa'},
    {name: 'description', content: 'Learn about ProHang - South Africa\'s leading manufacturer of premium aluminum washing lines. Family-owned business since 2010 with a commitment to quality and service.'},
    {name: 'keywords', content: 'ProHang, about us, South Africa, washing lines, family business, quality, aluminum, manufacturing'},
  ];
};

const teamMembers = [
  {
    name: 'Johan van der Merwe',
    role: 'Founder & CEO',
    bio: 'Started ProHang in 2010 with a vision to create the most durable washing lines in Africa.',
    experience: '15+ years in manufacturing'
  },
  {
    name: 'Sarah Nkomo',
    role: 'Head of Operations',
    bio: 'Ensures every ProHang product meets our exacting quality standards.',
    experience: '10+ years in quality control'
  },
  {
    name: 'Michael Johnson',
    role: 'Installation Manager',
    bio: 'Leads our team of certified installers across South Africa.',
    experience: '12+ years in home installations'
  },
  {
    name: 'Thandiwe Mthembu',
    role: 'Customer Success Manager',
    bio: 'Dedicated to ensuring every customer has the perfect ProHang experience.',
    experience: '8+ years in customer service'
  }
];

const milestones = [
  { year: '2010', event: 'ProHang founded in Johannesburg' },
  { year: '2012', event: 'First 1,000 installations completed' },
  { year: '2015', event: 'Expanded to Cape Town and Durban' },
  { year: '2018', event: 'Launched online store and nationwide delivery' },
  { year: '2020', event: 'Reached 10,000+ satisfied customers' },
  { year: '2023', event: 'Introduced lifetime warranty on premium models' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-prohang-navy to-prohang-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About ProHang
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-prohang-light">
              Proudly South African • Quality Since 2010 • Family-Owned Business
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-prohang-navy mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                ProHang began in 2010 when founder Johan van der Merwe noticed a gap in the South African market 
                for high-quality, durable washing lines. Frustrated with flimsy imports that broke after just 
                months of use, Johan set out to create something better.
              </p>
              <p>
                Working from a small workshop in Johannesburg, Johan developed the first ProHang washing line 
                using premium aluminum and stainless steel components. The focus was simple: create a product 
                so durable and reliable that it would be the last washing line our customers would ever need to buy.
              </p>
              <p>
                Today, ProHang is South Africa's leading manufacturer of premium washing lines, trusted by over 
                15,000 families across the country. We remain a family-owned business, committed to quality, 
                innovation, and exceptional customer service.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-prohang-light to-prohang-blue/20 rounded-lg p-8 text-center">
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-prohang-navy">15,000+</div>
                <div className="text-prohang-blue">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-prohang-navy">13+</div>
                <div className="text-prohang-blue">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-prohang-navy">18</div>
                <div className="text-prohang-blue">Service Areas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-prohang-navy">100%</div>
                <div className="text-prohang-blue">Made in SA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-prohang-navy text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-prohang-navy">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-prohang-navy mb-3">Quality First</h3>
              <p className="text-gray-600">
                We use only the finest materials and manufacturing processes to ensure every 
                ProHang product exceeds expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-prohang-navy">🇿🇦</span>
              </div>
              <h3 className="text-xl font-bold text-prohang-navy mb-3">Proudly South African</h3>
              <p className="text-gray-600">
                Every ProHang product is designed, manufactured, and tested right here in 
                South Africa by South Africans for South Africans.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prohang-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-prohang-navy">💚</span>
              </div>
              <h3 className="text-xl font-bold text-prohang-navy mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Our customers are family. We're here to support you with installation, 
                maintenance, and lifetime customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-prohang-navy text-center mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-prohang-blue"></div>
            
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-prohang-lime rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-prohang-navy rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-2xl font-bold text-prohang-navy mb-2">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-prohang-navy text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-prohang-light to-prohang-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-prohang-navy">👤</span>
                </div>
                <h3 className="text-xl font-bold text-prohang-navy mb-1">{member.name}</h3>
                <div className="text-prohang-blue font-medium mb-2">{member.role}</div>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <div className="text-xs text-prohang-lime font-semibold">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment */}
      <div className="bg-prohang-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-prohang-lime mb-2">Quality Guarantee</h3>
                <p className="text-prohang-light">
                  Every ProHang product comes with our industry-leading warranty and lifetime support.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-prohang-lime mb-2">Free Installation</h3>
                <p className="text-prohang-light">
                  Professional installation by certified technicians is always included at no extra cost.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-prohang-lime mb-2">Lifetime Support</h3>
                <p className="text-prohang-light">
                  Our customer care team is here to help you for as long as you own your ProHang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-prohang-light to-prohang-blue/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-prohang-navy mb-4">
            Ready to Experience the ProHang Difference?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied customers across South Africa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/shop"
              className="bg-prohang-navy text-white py-3 px-8 rounded-lg font-semibold hover:bg-prohang-blue transition-colors duration-200"
            >
              Shop Products
            </a>
            <a
              href="/book-installation"
              className="bg-prohang-lime text-prohang-navy py-3 px-8 rounded-lg font-semibold hover:bg-prohang-lime/80 transition-colors duration-200"
            >
              Book Installation
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 