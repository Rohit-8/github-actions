import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Use happy-dom in CI to avoid jsdom/webidl-conversions issues
    environment: 'happy-dom',
    globals: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'lcov'],
    },
  },
})
