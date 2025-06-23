
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**']
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': 'public, max-age=31536000'
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        passes: 3, // Increased compression passes
        pure_funcs: ['console.log'], // Remove console.log in production
        reduce_vars: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        collapse_vars: true
      },
      mangle: {
        safari10: true,
        toplevel: true // More aggressive mangling
      },
      format: {
        safari10: true,
        comments: false // Remove all comments
      }
    },
    cssMinify: 'esbuild', // Faster CSS minification
    chunkSizeWarningLimit: 500, // Lower chunk size warning
    assetsInlineLimit: 2048, // Inline smaller assets
    reportCompressedSize: false, // Skip gzip reporting for faster builds
    target: 'es2020' // Modern target for smaller bundles
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      css: {
        charset: false // Remove charset for smaller CSS
      }
    }
  },
  esbuild: {
    legalComments: 'none', // Remove legal comments
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
}));
