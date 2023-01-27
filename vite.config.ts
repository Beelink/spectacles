// utils
import { defineConfig } from "vite";
import { resolve } from "path";

// plugins
import Vue from "@vitejs/plugin-vue";
import SvgLoader from "vite-svg-loader";
import Checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), SvgLoader(), Checker({ typescript: true })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
  },
});
