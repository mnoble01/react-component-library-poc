/// <reference types="vitest/config" />
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ["tests/**/*.test.tsx"],
    parallel: true,
    setupFiles: ['./vitest.setup.ts'],
  },
}))