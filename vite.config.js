import { defineConfig } from 'vite';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  assetsInclude: ['**/*.xml'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    eslintPlugin(),
  ],
});
