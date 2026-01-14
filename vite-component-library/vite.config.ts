import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { glob } from 'glob'
// import packageJson from './package.json'

// const packageName = packageJson.name.split('/').pop() || packageJson.name

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: glob.sync(path.resolve(__dirname, 'src/**/*.{ts,tsx}')),
      formats: ['es'],
      // name: camelCase(packageName, { pascalCase: true }),
      // fileName: packageName,
    },
  },
})
