import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    // TODO: federation config, name: front_and_sidebar,
    // expose Front, Sidebar, and ThumbCarousel,
    // shared: react, react-dom, react-router-dom
    federation({
      name: "sidebar_and_thumb",
      filename: "remoteEntry.js",
      exposes: {
        "./Sidebar": "./src/components/sidebar/Sidebar",
        "./ThumbCarousel": "./src/components/thumb-carousel/ThumbCarousel",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 3010, // Set the desired port here
  },
  preview: {
    port: 3010, // Set the desired port here
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
  },
});
