import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const filePath = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    port: 33720,
    host: "0.0.0.0",
  },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    target: ["chrome107"],
    outDir: path.join(filePath, "dist"),
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },
});
