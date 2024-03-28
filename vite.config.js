import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    // eslint-disable-next-line no-undef
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
