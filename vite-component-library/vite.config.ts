import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
console.log(glob.sync('./src/**/*.{ts,tsx}'));
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    lib: {
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
      // The following outputs files to dist as a flat structure: e.g. dist/Button.js
      // and using preserveModules introduces other problems as noted below
      // entry: glob.sync('./src/**/*.{ts,tsx}'),
      formats: ['es'],
    },
    rollupOptions: {
      // The following prevents bundling react into the library build
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
      output: {
        // The following outputs absolute paths with dist: dist/Users/mnoble/dev/react-component-library/vite-component-library/src/components/Button.tsx
        // preserveModules: true,
        // This helps, but dist still contains react/react-dom output: dist/Users/mnoble/dev/react-component-library/vite-component-library/node_modules/react/cjs/react-jsx-runtime.development.js 
        // preserveModulesRoot: 'src',
      },
    },
  },
})
