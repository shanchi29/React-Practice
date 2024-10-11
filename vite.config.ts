import react from "@vitejs/plugin-react";
/*import path from 'node:path';*/
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      store: "/src/store",
      api: "/src/api",
    },
  },
  plugins: [react()],
});
