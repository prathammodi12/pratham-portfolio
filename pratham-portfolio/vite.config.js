import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    // Raise chunk-size warning limit (framer-motion is ~200 KB minified)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manually split heavy vendor libraries into named chunks
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom"))
              return "vendor-react";
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("@vercel")) return "vendor-vercel";
            return "vendor"; // all other node_modules
          }
        },
      },
    },
    // Enable minification (default)
    // Generate source maps only in development
    sourcemap: false,
    // Inline assets smaller than 4 KB as base64 to save round trips
    assetsInlineLimit: 4096,
    // CSS code-splitting keeps each chunk's CSS alongside its JS
    cssCodeSplit: true,
    // Target modern browsers — smaller output
    target: "es2020",
  },
});
