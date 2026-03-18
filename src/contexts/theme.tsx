import React, { createContext, useEffect } from "react";
import {
  ThemeStore,
  ContextType,
  ThemeMode,
} from "@/stores/theme";

const Context = createContext<ContextType | null>(null);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const store = ThemeStore((state) => state);
  const { theme, getTheme } = store;

  useEffect(() => {
    const appliedTheme = getTheme(theme);
    document.documentElement.dataset.theme = appliedTheme;
  }, [theme, getTheme]);

  useEffect(() => {
    if (theme !== ThemeMode.System) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = () => {
      const appliedTheme = getTheme(ThemeMode.System);
      document.documentElement.dataset.theme = appliedTheme;
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, [theme, getTheme]);

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export default ThemeProvider;