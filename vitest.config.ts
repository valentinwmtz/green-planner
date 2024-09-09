import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['@testing-library/jest-dom', './src/config/tests/setupTest.ts'],
    testTimeout: 30000,
  },
});
