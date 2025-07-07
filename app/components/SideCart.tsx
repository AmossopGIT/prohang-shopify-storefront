import {useState, useEffect} from 'react';
import {Link, useFetcher} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';

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

type SideCartProps = {
  cart: Cart | null;
  isOpen: boolean;
  onClose: () => void;
};

export function SideCart({cart, isOpen, onClose}: SideCartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const formatPrice = (amount: string) => `R${parseFloat(amount).toFixed(2)}`;
  const cartItemCount = cart?.lines?.nodes?.reduce((total, line) => total + line.quantity, 0) || 0;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Side Cart */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-prohang-navy">
              Shopping Cart ({cartItemCount})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Content */}
          {!cart || !cart.lines?.nodes?.length ? (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-prohang-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-lg font-medium text-prohang-navy mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-4">Add some products to get started</p>
                <button
                  onClick={onClose}
                  className="prohang-btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.lines.nodes.map((line) => (
                  <div key={line.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-prohang-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {line.merchandise.image ? (
                        <img 
                          src={line.merchandise.image.url}
                          alt={line.merchandise.product.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-xs text-prohang-navy font-medium text-center">
                          {line.merchandise.product.title}
                        </span>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-prohang-navy text-sm mb-1 truncate">
                        {line.merchandise.product.title}
                      </h4>
                      {line.merchandise.title !== 'Default Title' && (
                        <p className="text-xs text-gray-600 mb-2">
                          {line.merchandise.title}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-prohang-navy">
                          {formatPrice(line.merchandise.price.amount)}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <CartForm
                            route="/cart"
                            action={CartForm.ACTIONS.LinesUpdate}
                            inputs={{
                              lines: [{
                                id: line.id,
                                quantity: Math.max(0, line.quantity - 1)
                              }]
                            }}
                          >
                            <button 
                              type="submit"
                              className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center text-xs"
                              disabled={line.quantity <= 1}
                            >
                              -
                            </button>
                          </CartForm>
                          
                          <span className="text-sm font-medium w-6 text-center">
                            {line.quantity}
                          </span>
                          
                          <CartForm
                            route="/cart"
                            action={CartForm.ACTIONS.LinesUpdate}
                            inputs={{
                              lines: [{
                                id: line.id,
                                quantity: line.quantity + 1
                              }]
                            }}
                          >
                            <button 
                              type="submit"
                              className="w-6 h-6 rounded-full bg-prohang-navy text-white hover:bg-prohang-blue flex items-center justify-center text-xs"
                            >
                              +
                            </button>
                          </CartForm>
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <CartForm
                        route="/cart"
                        action={CartForm.ACTIONS.LinesRemove}
                        inputs={{lineIds: [line.id]}}
                      >
                        <button 
                          type="submit"
                          className="text-red-600 hover:text-red-800 text-xs mt-2"
                        >
                          Remove
                        </button>
                      </CartForm>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center text-lg font-semibold text-prohang-navy">
                  <span>Total:</span>
                  <span>{formatPrice(cart.cost.totalAmount.amount)}</span>
                </div>
                
                {/* Free Installation Notice */}
                <div className="bg-prohang-lime/20 border border-prohang-lime rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-prohang-navy">✓</span>
                    <span className="text-sm font-medium text-prohang-navy">
                      Free installation included
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/cart"
                    onClick={onClose}
                    className="w-full bg-prohang-navy text-white py-3 px-4 rounded-lg font-semibold hover:bg-prohang-blue transition-colors text-center block"
                  >
                    View Cart
                  </Link>
                  
                  <a
                    href={cart.checkoutUrl}
                    className="w-full bg-prohang-lime text-prohang-navy py-3 px-4 rounded-lg font-semibold hover:bg-prohang-lime/80 transition-colors text-center block"
                  >
                    Checkout
                  </a>
                  
                  <button
                    onClick={onClose}
                    className="w-full bg-transparent border border-prohang-navy text-prohang-navy py-3 px-4 rounded-lg font-semibold hover:bg-prohang-navy hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
} 