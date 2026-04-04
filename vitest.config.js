import { defineConfig } from 'vitest/config'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    // Кажемо Vitest ігнорувати стандартні папки + файл Playwright
    exclude: [...configDefaults.exclude, 'tests/stack.spec.cjs'], 
  },
})