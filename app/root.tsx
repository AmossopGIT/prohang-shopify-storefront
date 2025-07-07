import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  ScrollRestoration,
  isRouteErrorResponse,
} from '@remix-run/react';
import type {
  LinksFunction,
} from '@remix-run/node';
// Using ProHang logo as favicon
// import favicon from './assets/favicon.svg';
import resetStyles from './styles/reset.css?url';
import fontsStyles from './styles/fonts.css?url';
import appStyles from './styles/app.css?url';

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: resetStyles},
    {rel: 'stylesheet', href: fontsStyles},
    {rel: 'stylesheet', href: appStyles},
    {rel: 'icon', type: 'image/svg+xml', href: '/prohang-logo.svg'},
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>ProHang Washing Lines | Premium Foldaway Aluminum Washing Lines</title>
        <meta name="description" content="South Africa's premier washing line specialist. Professional installation services for foldaway aluminum washing lines across major cities." />
        <Meta />
        <Links />
      </head>
      <body className="bg-white">
        <div id="app">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.statusText ?? errorMessage;
    errorStatus = error?.status ?? errorStatus;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>ProHang - Error {errorStatus}</title>
      </head>
      <body className="bg-white">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="text-6xl font-bold text-prohang-navy">{errorStatus}</h1>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Oops! Something went wrong
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {errorMessage}
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-prohang-navy hover:bg-prohang-navy/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prohang-navy"
              >
                Go back home
              </a>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
} 