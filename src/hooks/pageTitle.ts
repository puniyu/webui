import { useContext, useEffect } from "react";
import { PageTitleContext } from "@/contexts/pageTitle";

export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error("usePageTitle must be used within PageTitleProvider");
  }
  return context;
};

export const useSetPageTitle = (title: string) => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);
};
