import type {ActionFunctionArgs, LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';
import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData, useFetcher, Link} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import {Header} from '~/components/Header';
import {Footer} from '~/components/Footer';

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
    totalTaxAmount?: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: {
    nodes: CartLine[];
  };
};

export const meta: MetaFunction = () => {
  return [
    {title: 'Shopping Cart | ProHang Washing Lines South Africa'},
    {name: 'description', content: 'Review your ProHang washing line order. Professional installation included with every purchase.'},
  ];
};

export async function loader({context, request}: LoaderFunctionArgs) {
  console.log('LOADER CONTEXT:', context);
  console.log('LOADER CONTEXT KEYS:', Object.keys(context || {}));
  
  const storefront = (context as any)?.storefront;
  
  // Direct API call as fallback
  const directStorefrontCall = async (query: string, variables: any) => {
    const response = await fetch(`https://prohang.myshopify.com/api/2024-04/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': 'dacf949c098c5a179518ae9a906e4723',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    return await response.json();
  };
  
  // Get cart ID from cookie
  const cookies = request.headers.get('Cookie') || '';
  const cartIdMatch = cookies.match(/cartId=([^;]+)/);
  const cartId = cartIdMatch ? cartIdMatch[1] : null;
  
  if (!cartId) {
    return json({cart: null});
  }

  try {
    let result;
    
    if (storefront) {
      // Use Hydrogen context if available
      result = await storefront.query(
        `#graphql
          query getCart($cartId: ID!) {
            cart(id: $cartId) {
              id
              checkoutUrl
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
              }
              lines(first: 100) {
                nodes {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                        handle
                      }
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        {
          variables: { cartId },
        }
      );
    } else {
      // Use direct API call
      console.log('Using direct API call for cart loader');
      result = await directStorefrontCall(
        `query getCart($cartId: ID!) {
          cart(id: $cartId) {
            id
            checkoutUrl
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
            }
            lines(first: 100) {
              nodes {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    product {
                      title
                      handle
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }`,
        { cartId }
      );
    }

    const cart = storefront ? result.cart : result?.data?.cart;
    return json({cart: cart as Cart | null});
  } catch (error) {
    console.error('Error loading cart:', error);
    return json({cart: null});
  }
}

export async function action({request, context}: ActionFunctionArgs) {
  console.log('ACTION CONTEXT:', context);
  console.log('ACTION CONTEXT KEYS:', Object.keys(context || {}));
  
  const storefront = (context as any)?.storefront;
  
  // Direct API call as fallback
  const directStorefrontCall = async (query: string, variables: any) => {
    const response = await fetch(`https://prohang.myshopify.com/api/2024-04/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': 'dacf949c098c5a179518ae9a906e4723',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    return await response.json();
  };
  
  const formData = await request.formData();
  const {action, inputs} = CartForm.getFormInput(formData);
  
  if (!action) {
    throw new Error('No action provided');
  }

  try {
    // Get cart ID from cookie
    const cookies = request.headers.get('Cookie') || '';
    const cartIdMatch = cookies.match(/cartId=([^;]+)/);
    let cartId = cartIdMatch ? cartIdMatch[1] : null;

  let result;
    let headers = new Headers();

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
        if (cartId) {
          // Add to existing cart
          if (storefront) {
            result = await storefront.mutate(
              `#graphql
                mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
                  cartLinesAdd(cartId: $cartId, lines: $lines) {
                    cart {
                      id
                      checkoutUrl
                      cost {
                        totalAmount { amount currencyCode }
                        subtotalAmount { amount currencyCode }
                        totalTaxAmount { amount currencyCode }
                      }
                      lines(first: 100) {
                        nodes {
                          id
                          quantity
                          merchandise {
                            ... on ProductVariant {
                              id
                              title
                              price { amount currencyCode }
                              product { title handle }
                              image { url altText }
                            }
                          }
                        }
                      }
                    }
                    userErrors { field message }
                  }
                }
              `,
              { variables: { cartId, lines: inputs.lines } }
            );
            result = result?.cartLinesAdd;
          } else {
            console.log('Using direct API call for cartLinesAdd');
            const apiResult = await directStorefrontCall(
              `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
                cartLinesAdd(cartId: $cartId, lines: $lines) {
                  cart {
                    id
                    checkoutUrl
                    cost {
                      totalAmount { amount currencyCode }
                      subtotalAmount { amount currencyCode }
                      totalTaxAmount { amount currencyCode }
                    }
                    lines(first: 100) {
                      nodes {
                        id
                        quantity
                        merchandise {
                          ... on ProductVariant {
                            id
                            title
                            price { amount currencyCode }
                            product { title handle }
                            image { url altText }
                          }
                        }
                      }
                    }
                  }
                  userErrors { field message }
                }
              }`,
              { cartId, lines: inputs.lines }
            );
            result = apiResult?.data?.cartLinesAdd;
          }
        } else {
          // Create new cart
          if (storefront) {
            result = await storefront.mutate(
              `#graphql
                mutation cartCreate($lines: [CartLineInput!]!) {
                  cartCreate(input: { lines: $lines }) {
                    cart {
                      id
                      checkoutUrl
                      cost {
                        totalAmount { amount currencyCode }
                        subtotalAmount { amount currencyCode }
                        totalTaxAmount { amount currencyCode }
                      }
                      lines(first: 100) {
                        nodes {
                          id
                          quantity
                          merchandise {
                            ... on ProductVariant {
                              id
                              title
                              price { amount currencyCode }
                              product { title handle }
                              image { url altText }
                            }
                          }
                        }
                      }
                    }
                    userErrors { field message }
                  }
                }
              `,
              { variables: { lines: inputs.lines } }
            );
            result = result?.cartCreate;
          } else {
            console.log('Using direct API call for cartCreate');
            const apiResult = await directStorefrontCall(
              `mutation cartCreate($lines: [CartLineInput!]!) {
                cartCreate(input: { lines: $lines }) {
                  cart {
                    id
                    checkoutUrl
                    cost {
                      totalAmount { amount currencyCode }
                      subtotalAmount { amount currencyCode }
                      totalTaxAmount { amount currencyCode }
                    }
                    lines(first: 100) {
                      nodes {
                        id
                        quantity
                        merchandise {
                          ... on ProductVariant {
                            id
                            title
                            price { amount currencyCode }
                            product { title handle }
                            image { url altText }
                          }
                        }
                      }
                    }
                  }
                  userErrors { field message }
                }
              }`,
              { lines: inputs.lines }
            );
            result = apiResult?.data?.cartCreate;
          }
          
          // Set cart ID cookie for new cart
          if (result?.cart?.id) {
            headers.set('Set-Cookie', `cartId=${result.cart.id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000`);
          }
        }
      break;

    case CartForm.ACTIONS.LinesUpdate:
        if (!cartId) throw new Error('No cart found');
        if (storefront) {
          result = await storefront.mutate(
            `#graphql
              mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
                cartLinesUpdate(cartId: $cartId, lines: $lines) {
                  cart {
                    id
                    checkoutUrl
                    cost {
                      totalAmount { amount currencyCode }
                      subtotalAmount { amount currencyCode }
                      totalTaxAmount { amount currencyCode }
                    }
                    lines(first: 100) {
                      nodes {
                        id
                        quantity
                        merchandise {
                          ... on ProductVariant {
                            id
                            title
                            price { amount currencyCode }
                            product { title handle }
                            image { url altText }
                          }
                        }
                      }
                    }
                  }
                  userErrors { field message }
                }
              }
            `,
            { variables: { cartId, lines: inputs.lines } }
          );
          result = result?.cartLinesUpdate;
        } else {
          console.log('Using direct API call for cartLinesUpdate');
          const apiResult = await directStorefrontCall(
            `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
              cartLinesUpdate(cartId: $cartId, lines: $lines) {
                cart {
                  id
                  checkoutUrl
                  cost {
                    totalAmount { amount currencyCode }
                    subtotalAmount { amount currencyCode }
                    totalTaxAmount { amount currencyCode }
                  }
                  lines(first: 100) {
                    nodes {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                          title
                          price { amount currencyCode }
                          product { title handle }
                          image { url altText }
                        }
                      }
                    }
                  }
                }
                userErrors { field message }
              }
            }`,
            { cartId, lines: inputs.lines }
          );
          result = apiResult?.data?.cartLinesUpdate;
        }
      break;

    case CartForm.ACTIONS.LinesRemove:
        if (!cartId) throw new Error('No cart found');
        if (storefront) {
          result = await storefront.mutate(
            `#graphql
              mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
                cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
                  cart {
                    id
                    checkoutUrl
                    cost {
                      totalAmount { amount currencyCode }
                      subtotalAmount { amount currencyCode }
                      totalTaxAmount { amount currencyCode }
                    }
                    lines(first: 100) {
                      nodes {
                        id
                        quantity
                        merchandise {
                          ... on ProductVariant {
                            id
                            title
                            price { amount currencyCode }
                            product { title handle }
                            image { url altText }
                          }
                        }
                      }
                    }
                  }
                  userErrors { field message }
                }
              }
            `,
            { variables: { cartId, lineIds: inputs.lineIds } }
          );
          result = result?.cartLinesRemove;
        } else {
          console.log('Using direct API call for cartLinesRemove');
          const apiResult = await directStorefrontCall(
            `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
              cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
                cart {
                  id
                  checkoutUrl
                  cost {
                    totalAmount { amount currencyCode }
                    subtotalAmount { amount currencyCode }
                    totalTaxAmount { amount currencyCode }
                  }
                  lines(first: 100) {
                    nodes {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                          title
                          price { amount currencyCode }
                          product { title handle }
                          image { url altText }
                        }
                      }
                    }
                  }
                }
                userErrors { field message }
              }
            }`,
            { cartId, lineIds: inputs.lineIds }
          );
          result = apiResult?.data?.cartLinesRemove;
        }
      break;

    default:
        throw new Error(`Unsupported action: ${action}`);
  }

  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string') {
    headers.set('Location', redirectTo);
      return redirect(redirectTo, { headers });
  }

  return json(
    {
        cart: result?.cart,
        errors: result?.userErrors || [],
      analytics: {
          cartId: result?.cart?.id,
      },
    },
      { headers }
    );
  } catch (error) {
    console.error('Cart action error:', error);
    return json(
      {
        cart: null,
        errors: [{ field: 'general', message: error instanceof Error ? error.message : 'An error occurred' }],
      },
      { status: 500 }
  );
  }
}

export default function Cart() {
  const {cart} = useLoaderData<{cart: Cart | null}>();
  const fetcher = useFetcher();

  if (!cart || !cart.lines?.nodes?.length) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-prohang-light-blue rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🛒</span>
            </div>
            <h1 className="prohang-heading-lg mb-4">Your cart is empty</h1>
            <p className="prohang-text-body mb-8">
              Start shopping for premium washing lines and accessories
            </p>
            <Link
              to="/collections/all"
              className="prohang-btn-primary"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Cart Header */}
      <div className="bg-gradient-to-r from-prohang-navy to-prohang-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Shopping Cart
          </h1>
          <p className="text-xl text-center mt-4 text-prohang-light">
            Professional installation included with every order
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-prohang-navy">
                  Order Items ({cart.lines.nodes.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cart.lines.nodes.map((line: CartLine) => (
                  <div key={line.id} className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-32 sm:h-24 bg-prohang-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {line.merchandise.image ? (
                          <img 
                            src={line.merchandise.image.url}
                            alt={line.merchandise.product.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-prohang-navy font-semibold text-sm">
                            {line.merchandise.product.title}
                          </span>
                        )}
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-prohang-navy mb-2">
                          {line.merchandise.product.title}
                        </h3>
                        {line.merchandise.title !== 'Default Title' && (
                          <p className="text-sm text-gray-600 mb-2">
                            {line.merchandise.title}
                          </p>
                        )}
                        
                        {/* Price and Quantity */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-bold text-prohang-navy">
                              R{parseFloat(line.merchandise.price.amount).toFixed(2)}
                            </span>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-gray-300 rounded-lg">
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
                                  className="px-3 py-1 text-gray-500 hover:text-prohang-navy"
                                  disabled={line.quantity <= 1}
                                >
                                  -
                                </button>
                              </CartForm>
                              
                              <span className="px-3 py-1 text-center min-w-[3rem]">
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
                                  className="px-3 py-1 text-gray-500 hover:text-prohang-navy"
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
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Remove
                            </button>
                          </CartForm>
                        </div>
                        
                        {/* Line Total */}
                        <div className="mt-2">
                          <span className="text-sm text-gray-600">
                            Subtotal: R{(parseFloat(line.merchandise.price.amount) * line.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-prohang-navy mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R{parseFloat(cart.cost.subtotalAmount.amount).toFixed(2)}</span>
                </div>
                
                {cart.cost.totalTaxAmount && parseFloat(cart.cost.totalTaxAmount.amount) > 0 && (
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>R{parseFloat(cart.cost.totalTaxAmount.amount).toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm text-prohang-lime">
                  <span>Installation</span>
                  <span>FREE</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-prohang-navy">
                    <span>Total</span>
                    <span>R{parseFloat(cart.cost.totalAmount.amount).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Free Installation Notice */}
              <div className="bg-prohang-light-blue/20 border border-prohang-light-blue rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-prohang-lime text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-prohang-navy text-sm">
                      Free Professional Installation
                    </h4>
                    <p className="text-xs text-gray-600">
                      Expert installation is included with every order
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <a
                href={cart.checkoutUrl}
                className="w-full bg-prohang-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-prohang-blue transition-colors duration-200 text-center block mb-4"
              >
                Proceed to Checkout
              </a>
              
              <Link
                to="/collections/all"
                className="w-full bg-prohang-lime text-prohang-navy py-3 px-6 rounded-lg font-semibold hover:bg-prohang-lime/80 transition-colors duration-200 text-center block"
              >
                Continue Shopping
              </Link>
              
              {/* Security Notice */}
              <div className="mt-6 text-center text-xs text-gray-500">
                <p>🔒 Secure checkout powered by Shopify</p>
                <p>💳 We accept all major credit cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 