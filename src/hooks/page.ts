import { useContext, useEffect } from "react";
import { PageContext } from "@/contexts/page";

export const usePageTitle = () => {
  const context = useContext(PageContext);
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
