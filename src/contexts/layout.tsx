import React, { createContext } from "react";

import { SidebarProvider } from "./sidebar";
import { ThemeProvider } from "./theme";

export const Context = createContext(null);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Context.Provider value={null}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </Context.Provider>
    </>
  );
};
