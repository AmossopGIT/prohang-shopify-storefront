import {useState, useEffect} from 'react';
import {Link, useLocation, useFetcher} from '@remix-run/react';
import {SideCart} from './SideCart';

type CartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    product: {
      title: string;
      handle: string;
    };
    image?: {
      url: string;
      altText: string;
    };
  };
};

type Cart = {
  id: string;
  checkoutUrl: string;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: {
    nodes: CartLine[];
  };
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);
  const location = useLocation();
  const cartFetcher = useFetcher<{cart: Cart | null}>();

  // Service areas
  const serviceAreas = [
    'Johannesburg', 'Pretoria', 'Centurion', 'Randburg', 'Sandton', 'Roodepoort',
    'Benoni', 'Boksburg', 'Germiston', 'Kempton Park', 'Edenvale', 'Bedfordview',
    'Krugersdorp', 'Vereeniging', 'Vanderbijlpark', 'Sasolburg'
  ];

  // Load cart data on component mount
  useEffect(() => {
    if (cartFetcher.state === 'idle' && !cartFetcher.data) {
      cartFetcher.load('/cart');
    }
  }, [cartFetcher]);

  // Auto-reload cart data periodically to keep it fresh
  useEffect(() => {
    const interval = setInterval(() => {
      if (cartFetcher.state === 'idle') {
        cartFetcher.load('/cart');
      }
    }, 5000); // Reload every 5 seconds

    return () => clearInterval(interval);
  }, [cartFetcher]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSideCartOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openSideCart = () => {
    setIsSideCartOpen(true);
    // Refresh cart data when opening
    if (cartFetcher.state === 'idle') {
      cartFetcher.load('/cart');
    }
  };

  const closeSideCart = () => {
    setIsSideCartOpen(false);
  };

  // Calculate cart quantity
  const cart = cartFetcher.data?.cart;
  const cartItemCount = cart?.lines?.nodes?.reduce((total, line) => total + line.quantity, 0) || 0;

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <img 
                  src="/prohang-logo-blue.png" 
                  alt="ProHang Logo" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-prohang-dark-navy hover:text-prohang-navy font-medium transition-colors">
                Home
              </Link>
              <Link to="/collections/all" className="text-prohang-dark-navy hover:text-prohang-navy font-medium transition-colors">
                Shop
              </Link>
              <Link to="/book-installation" className="text-prohang-dark-navy hover:text-prohang-navy font-medium transition-colors">
                Book Installation
              </Link>
              <Link to="/about" className="text-prohang-dark-navy hover:text-prohang-navy font-medium transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-prohang-dark-navy hover:text-prohang-navy font-medium transition-colors">
                Contact
              </Link>
              <Link to="/service-areas" className="text-prohang-dark-navy hover:text-prohang-navy font-medium transition-colors">
                Service Areas
              </Link>
            </nav>

            {/* Desktop Auth & Cart */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/account/login" className="text-prohang-navy hover:text-prohang-dark-navy text-sm transition-colors">
                Login
              </Link>
              <Link to="/account/register" className="text-prohang-navy hover:text-prohang-dark-navy text-sm transition-colors">
                Register
              </Link>
              
              {/* Desktop Cart Button */}
              <button 
                onClick={openSideCart}
                className="relative p-2 text-prohang-navy hover:text-prohang-dark-navy transition-colors group"
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-prohang-lime text-prohang-navy text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
              
              <Link
                to="/book-installation"
                className="bg-prohang-navy text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-prohang-blue transition-colors duration-200"
              >
                🤙 Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Cart Button */}
              <button 
                onClick={openSideCart}
                className="relative p-2 text-prohang-navy hover:text-prohang-dark-navy transition-colors group"
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-prohang-lime text-prohang-navy text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
              
              <button
                onClick={toggleMenu}
                className="p-2 text-prohang-navy hover:text-prohang-dark-navy focus:outline-none focus:ring-2 focus:ring-prohang-navy rounded-md"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-2">
            <Link 
              to="/" 
              className="block px-3 py-2 text-prohang-dark-navy font-medium text-base rounded-md hover:bg-prohang-light-blue transition-colors"
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
            <Link 
              to="/collections/all" 
              className="block px-3 py-2 text-prohang-dark-navy font-medium text-base rounded-md hover:bg-prohang-light-blue transition-colors"
              onClick={closeMenu}
            >
              🛒 Shop
            </Link>
            <Link 
              to="/book-installation" 
              className="block px-3 py-2 text-prohang-dark-navy font-medium text-base rounded-md hover:bg-prohang-light-blue transition-colors"
              onClick={closeMenu}
            >
              📅 Book Installation
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-prohang-dark-navy font-medium text-base rounded-md hover:bg-prohang-light-blue transition-colors"
              onClick={closeMenu}
            >
              ℹ️ About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-prohang-dark-navy font-medium text-base rounded-md hover:bg-prohang-light-blue transition-colors"
              onClick={closeMenu}
            >
              📞 Contact
            </Link>
            <Link 
              to="/service-areas" 
              className="block px-3 py-2 text-prohang-dark-navy font-medium text-base rounded-md hover:bg-prohang-light-blue transition-colors"
              onClick={closeMenu}
            >
              🌍 Service Areas
            </Link>
            
            <div className="border-t border-gray-100 pt-4 mt-4">
              <Link 
                to="/account/login" 
                className="block px-3 py-2 text-prohang-navy text-base rounded-md hover:bg-prohang-light-blue transition-colors"
                onClick={closeMenu}
              >
                👤 Login
              </Link>
              <Link 
                to="/account/register" 
                className="block px-3 py-2 text-prohang-navy text-base rounded-md hover:bg-prohang-light-blue transition-colors"
                onClick={closeMenu}
              >
                📝 Register
              </Link>
              <Link
                to="/book-installation"
                className="block mx-3 mt-4 bg-prohang-navy text-white px-4 py-3 rounded-md text-center font-medium hover:bg-prohang-blue transition-colors"
                onClick={closeMenu}
              >
                🤙 Book Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Side Cart */}
      <SideCart 
        cart={cart || null} 
        isOpen={isSideCartOpen} 
        onClose={closeSideCart} 
      />
    </>
  );
} 