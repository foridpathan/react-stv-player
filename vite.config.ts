import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dtsPlugin from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    react(),
    dtsPlugin({
      // entryRoot: "src/lib", // Ensure it includes your type folder
      // include: ["src/lib"],
      insertTypesEntry: true,
      // entryRoot: "src/lib",
      include: ["src/lib/**/*"],
      // insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "ReactSTVPlayer",
      fileName: "react-stv-player",
      formats: ["cjs", "es"]
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
