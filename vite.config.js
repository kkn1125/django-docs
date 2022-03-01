/*global process, __dirname*/
/*eslint no-undef: "error"*/

import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:
    process.env.NODE_ENV === "production"
      ? "/django-docs/" // note the trailing slash
      : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        404: resolve(__dirname, "404/index.html"),
      },
    },
  },
});
