export function Testimonials() {
  const testimonials = [
    {
      quote: "ProHang installed our washing line last month and we couldn't be happier. The quality is exceptional and the installation was professional.",
      author: "Sarah M.",
      location: "Johannesburg",
    },
    {
      quote: "After years of broken washing lines, ProHang's durable aluminum design has been a game-changer. Highly recommend!",
      author: "David K.",
      location: "Cape Town",
    },
    {
      quote: "The customer service is outstanding. They helped us choose the perfect size for our space and installed it perfectly.",
      author: "Lisa R.",
      location: "Durban",
    },
    {
      quote: "Great value for money. The washing line looks amazing and functions perfectly. Professional installation included!",
      author: "Mike T.",
      location: "Pretoria",
    },
    {
      quote: "ProHang's warranty gave us peace of mind. The product is built to last and looks great in our backyard.",
      author: "Jenny P.",
      location: "Port Elizabeth",
    },
    {
      quote: "Quick delivery and installation. The team was courteous and cleaned up after themselves. Excellent service!",
      author: "Robert L.",
      location: "Bloemfontein",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="prohang-container">
        <div className="text-center mb-16">
          <h2 className="prohang-heading-lg mb-4">What Our Customers Say</h2>
          <p className="prohang-text-lead max-w-2xl mx-auto">
            Don't just take our word for it. Here's what South Africans are saying about ProHang washing lines.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <blockquote className="text-prohang-dark-navy italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-prohang-light-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-prohang-navy font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-prohang-dark-navy">- {testimonial.author}</p>
                  <p className="text-sm text-prohang-navy">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 