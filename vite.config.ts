/// <reference types="vitest" />
import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    // eslint-disable-next-line
    alias: { '@': path.resolve(__dirname, 'src/') },
  },
});
