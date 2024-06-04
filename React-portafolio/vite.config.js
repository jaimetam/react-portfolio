import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"), // Set up alias for cleaner imports
    },
  },
  // Optional: Configure public base path if deploying to a subdirectory
  base: process.env.NODE_ENV === "production" ? "/React-portafolio/" : "/", 
});
