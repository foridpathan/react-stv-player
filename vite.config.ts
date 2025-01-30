import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "build",
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});
