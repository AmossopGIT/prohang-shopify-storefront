import type {EntryContext} from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import {isbot} from 'isbot';
import {renderToString} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import {createShopifyContext} from '~/lib/shopify.server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context?: {
    waitUntil?: (promise: Promise<any>) => void;
    session?: any;
    storefront?: any;
    env?: any;
  },
) {
  // Create Shopify context if not provided
  const shopifyContext = context?.storefront ? context : createShopifyContext();
  
  // Ensure remixContext has the Shopify context
  if (remixContext && typeof remixContext === 'object') {
    (remixContext as any).shopifyContext = shopifyContext;
  }
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    shop: {
      checkoutDomain: shopifyContext.env?.VITE_PUBLIC_CHECKOUT_DOMAIN || 'checkout.shopify.com',
      storeDomain: shopifyContext.env?.VITE_PUBLIC_SHOPIFY_STORE_DOMAIN || 'prohang.myshopify.com',
    },
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // Added for development
      'https://cdn.shopify.com',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.shopify.com',
    ],
    fontSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'data:',
    ],
    connectSrc: [
      "'self'",
      'https://cdn.shopify.com',
    ],
  });

  const html = renderToString(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>
  );

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(html, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
} 