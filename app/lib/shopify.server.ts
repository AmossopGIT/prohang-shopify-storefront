import {createStorefrontClient} from '@shopify/hydrogen';

// Shopify configuration
const STORE_DOMAIN = process.env.VITE_PUBLIC_SHOPIFY_STORE_DOMAIN || 'prohang.myshopify.com';
const STOREFRONT_API_TOKEN = process.env.VITE_PUBLIC_STOREFRONT_API_TOKEN || 'dacf949c098c5a179518ae9a906e4723';

console.log('Using Shopify store:', STORE_DOMAIN);
console.log('Token available:', !!STOREFRONT_API_TOKEN);

export function createShopifyContext() {
  const storefront = createStorefrontClient({
    storeDomain: STORE_DOMAIN,
    storefrontApiVersion: '2024-04',
    publicStorefrontToken: STOREFRONT_API_TOKEN,
  });

  return {
    storefront,
    env: {
      VITE_PUBLIC_SHOPIFY_STORE_DOMAIN: STORE_DOMAIN,
      VITE_PUBLIC_STOREFRONT_API_TOKEN: STOREFRONT_API_TOKEN,
    },
  };
} 