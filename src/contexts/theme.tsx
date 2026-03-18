import React, { createContext, useEffect, useMemo } from "react";
import {
  ThemeStore,
  ContextType,
  ThemeMode,
} from "@/stores/theme";

export const Context = createContext<ContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const store = ThemeStore((state) => state);
  const { theme, setTheme, getTheme } = store;

  useEffect(() => {
    const appliedTheme = getTheme(theme);
    document.documentElement.dataset.theme = appliedTheme;
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = () => {
      setTheme(ThemeMode.System);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, [setTheme]);

  const context = useMemo(() => store, [store]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};
