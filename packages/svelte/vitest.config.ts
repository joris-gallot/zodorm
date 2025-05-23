import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [svelte()],
  test: {
    include: ['**/*.browser.test.ts'],
    name: 'svelte - browser',
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
