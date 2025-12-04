import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        sakura: {
          50: { value: "#fff5f7" },
          100: { value: "#ffe4e9" },
          200: { value: "#ffc4d6" },
          300: { value: "#ffb6c1" },
          400: { value: "#ffa8c5" },
          500: { value: "#ff8fb3" },
          600: { value: "#f472a3" },
          700: { value: "#db5087" },
          800: { value: "#b83d6e" },
          900: { value: "#9a2f5a" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          DEFAULT: { value: { base: "{colors.sakura.400}", _dark: "{colors.sakura.600}" } },
          fg: { value: { base: "{colors.sakura.600}", _dark: "{colors.sakura.300}" } },
          muted: { value: { base: "{colors.sakura.200}", _dark: "{colors.sakura.800}" } },
        },
        bg: {
          DEFAULT: { value: { base: "#ffffff", _dark: "#0a0a0a" } },
          subtle: { value: { base: "{colors.sakura.50}", _dark: "#1a1a1a" } },
          muted: { value: { base: "{colors.sakura.100}", _dark: "#2a2a2a" } },
        },
        border: {
          DEFAULT: { value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" } },
          accent: { value: { base: "{colors.sakura.300}", _dark: "{colors.sakura.700}" } },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
