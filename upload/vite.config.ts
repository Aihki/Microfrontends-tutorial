// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'uploadMicrofrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './MediaForm': './src/views/upload/MediaForm.tsx',
        './Upload': './src/views/upload/Upload.tsx',
      },
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3069,
  },
  build: {
    target: 'esnext',
  },
});
