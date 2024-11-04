import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/MyCustomElement.js",
      name: "MyVueComponent",
      fileName: (format) => `my-vue-component.${format}.js`,
      formats: ["es"],
    },
  },
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
});
