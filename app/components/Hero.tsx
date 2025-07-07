export function Hero() {
  return (
    <section 
      className="text-white py-20 lg:py-32 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/prohang-banner.jpg)'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-prohang-dark-navy/90 to-prohang-navy/80"></div>
      
      <div className="prohang-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="prohang-heading-xl text-white mb-6">
              PROHANG WASHING LINES
            </h1>
            <p className="prohang-text-lead text-white/90 mb-8 max-w-2xl">
              ProHang Custom Wall-Mounted Foldaway Aluminum Washing Lines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/collections/all" 
                className="bg-transparent border-2 border-prohang-lime text-prohang-lime py-4 px-8 rounded-lg font-semibold text-lg hover:bg-prohang-lime hover:text-prohang-navy transition-all duration-200 text-center"
              >
                View Products
              </a>
              <a
                href="/book-installation" 
                className="bg-prohang-lime text-prohang-navy py-4 px-8 rounded-lg font-semibold text-lg hover:bg-prohang-lime/90 transition-colors duration-200 text-center"
              >
                🤙 Book Installation
              </a>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                <img 
                  src="/prohang-shakas.png" 
                  alt="ProHang Washing Lines Installation" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Floating Feature Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-prohang-light-blue rounded-lg flex items-center justify-center">
                    <span className="text-prohang-navy">🛠️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-prohang-dark-navy">Expert Installation</p>
                    <p className="text-sm text-prohang-navy">Professional service</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-prohang-lime rounded-lg flex items-center justify-center">
                    <span className="text-white">⚡</span>
                  </div>
                  <div>
                    <p className="font-semibold text-prohang-dark-navy">Fast Delivery</p>
                    <p className="text-sm text-prohang-navy">Quick installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 