import { createContext, ReactNode, useState } from "react";

interface PageTitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

export const PageTitleContext = createContext<PageTitleContextType | undefined>(
  undefined,
);

export const PageTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
