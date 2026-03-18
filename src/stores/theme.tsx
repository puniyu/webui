import { create } from "zustand";

export const enum ThemeMode {
  DARK = "dark",
  LIGHT = "light",
  System = "system",
}

export type State = {
  theme: ThemeMode;
};
export type Action = {
  setTheme: (theme: ThemeMode) => void;
  getTheme: (theme: ThemeMode) => ThemeMode.LIGHT | ThemeMode.DARK;
  toggleTheme: () => void;
};
export type ContextType = State & Action;

export const ThemeStore = create<ContextType>((set) => ({
  theme: ThemeMode.System,
  setTheme: (theme) => set({ theme }),
  getTheme: (theme) => {
    if (theme === ThemeMode.System) {
      return getSystemTheme();
    }
    return theme;
  },
  toggleTheme: () =>
    set((state) => {
      if (state.theme === ThemeMode.System) {
        return { theme: getSystemTheme() };
      }
      return {
        theme:
          state.theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT,
      };
    }),
}));

const getSystemTheme = (): ThemeMode.LIGHT | ThemeMode.DARK => {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? ThemeMode.LIGHT
    : ThemeMode.DARK;
};
