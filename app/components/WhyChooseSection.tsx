export function WhyChooseSection() {
  const features = [
    {
      icon: '🛠️',
      title: 'Professional Installation',
      description: 'Our certified installers ensure your washing line is mounted securely and positioned perfectly for optimal use.',
    },
    {
      icon: '🌟',
      title: 'Premium Quality',
      description: 'Made from durable aluminum that resists rust and corrosion, designed to withstand South African weather conditions.',
    },
    {
      icon: '🏠',
      title: 'Custom Solutions',
      description: 'We offer custom sizing and configurations to fit your specific space and laundry needs perfectly.',
    },
    {
      icon: '🔧',
      title: 'Lifetime Warranty',
      description: 'Peace of mind with our comprehensive warranty coverage on all ProHang products and installation services.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="prohang-container">
        <div className="text-center mb-16">
          <h2 className="prohang-heading-lg mb-4">Why Choose ProHang?</h2>
          <p className="prohang-text-lead max-w-2xl mx-auto">
            We're South Africa's leading washing line specialists, combining quality products with expert installation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-prohang-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="prohang-heading-sm mb-4">{feature.title}</h3>
              <p className="text-prohang-navy leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 