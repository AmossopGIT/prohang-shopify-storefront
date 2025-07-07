import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {vitePlugin as remix} from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    remix({
      presets: [hydrogen.preset()],
      ignoredRouteFiles: ['**/.*'],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  server: {
    port: 3000,
  },
}); 