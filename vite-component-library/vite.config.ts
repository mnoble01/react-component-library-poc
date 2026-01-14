import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { glob } from 'glob'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    lib: {
      // Option 1: Explicitly list each entry point and transform the file path
      // entry: Object.fromEntries(
      //   glob.sync('./src/components/*.{ts,tsx,css}').map((file) => {
      //     // This removes `src/` as well as the file extension from each
      //     // file, so e.g. src/nested/foo.js becomes nested/foo
      //     return [path.relative('src', file.slice(0, file.length - path.extname(file).length)), 
      //       // This expands the relative paths to absolute paths, so e.g.
      //       // src/nested/foo becomes /project/src/nested/foo.js
      //       fileURLToPath(new URL(file, import.meta.url))
      //     ];
      //   })
      // ),
      // Option 2: Using the following glob requires setting preserveModules=true, preserveModulesRoot='src' below
      entry: glob.sync('./src/components/*.{ts,tsx,css}'),
      formats: ['es'],
    },
    rollupOptions: {
      // The following prevents bundling react into the library build
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
})
