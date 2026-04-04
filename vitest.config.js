import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // Це симулює браузерне середовище (DOM) у Node.js
  },
})