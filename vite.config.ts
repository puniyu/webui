import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import viteCompression from "vite-plugin-compression";

const filePath = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    port: 33720,
    host: "0.0.0.0",
  },
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      verbose: true,
      deleteOriginFile: false,
    }),
  ],
  build: {
    target: ["chrome107"],
    outDir: path.join(filePath, "dist"),
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          /** ui组件 */
          if (
            id.includes("@chakra-ui/") ||
            id.includes("next-themes") ||
            id.includes("motion")
          ) {
            return "vendor-ui";
          }

          /** react */
          if (id.includes("react")) {
            return "vendor-react";
          }
          /** ui工具库 */
          if (
            id.includes("tailwind") ||
            id.includes("tw-animate-css") ||
            id.includes("tailwindcss-animate") ||
            id.includes("lucide-react") ||
            id.includes("class-variance-authority") ||
            id.includes("gsap") ||
            id.includes("@gsap/") ||
            id.includes("@emotion/react")
          ) {
            return "vendor-ui-utils";
          }

          /** 组件 */
          if (id.includes("/components/")) {
            return "components";
          }

          /** 页面 */
          if (id.includes("/pages/")) {
            const segments = id.split("/");
            const pageName =
              segments[segments.findIndex((s) => s === "pages") + 1];
            if (pageName) {
              return `page-${pageName}`;
            }
          }
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/entry-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || "";
          const extType = info.split(".").pop() || "misc";
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(info)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(info)) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
});
