import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@terra-money/terra.js': '@terra-money/terra.js/dist/bundle.js',
      process: resolve(__dirname, 'src/polyfills/process-es6.js'),
      'readable-stream': 'vite-compatible-readable-stream',
    },
  },
  plugins: [tsconfigPaths(), vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    chunkSizeWarningLimit: 2060,
  },
});
