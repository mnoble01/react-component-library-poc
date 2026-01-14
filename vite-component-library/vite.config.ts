import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    lib: {
      // Option 1: Explicitly list each entry point and transform the file path
      // 
      // "If you want to convert a set of files to another format while maintaining the file structure and export signatures, 
      // the recommended way—instead of using output.preserveModules that may tree-shake exports as well as emit virtual files 
      // created by plugins—is to turn every file into an entry point." - https://rollupjs.org/configuration-options/#input 
      entry: Object.fromEntries(
        glob.sync('./src/components/*.{ts,tsx,css}').map((file) => {
          // This removes `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          return [path.relative('src', file.slice(0, file.length - path.extname(file).length)), 
            // This expands the relative paths to absolute paths, so e.g.
            // src/nested/foo becomes /project/src/nested/foo.js
            fileURLToPath(new URL(file, import.meta.url))
          ];
        })
      ),
      // Option 2: Using the following glob requires setting preserveModules=true, preserveModulesRoot='src' below
      // entry: glob.sync('./src/components/*.{ts,tsx,css}'),
      formats: ['es'],
    },
    rollupOptions: {
      // The following prevents bundling react into the library build
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
      output: {
        // Enable for Option 2 above:
        // preserveModules: true,
        // preserveModulesRoot: 'src',
      },
    },
  },
})
