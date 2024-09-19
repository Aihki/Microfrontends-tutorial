import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add the federation configuration
    federation({
      // name: mediastore
      name: 'mediastore',
      filename: 'remoteEntry.js',
      // exposes: contextHooks, MediaContext, UserContext, apiHooks
      exposes: {
        './ContextHooks': './src/hooks/contextHooks',
        './MediaContext': './src/contexts/MediaContext',
        './UserContext': './src/contexts/UserContext',
        './ApiHooks': './src/hooks/apiHooks',
      },
      // shared: react, react-dom, react-router-dom
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3001, // Set the desired port here
  },
  preview: {
    port: 3001, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
