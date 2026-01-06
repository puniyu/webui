import { useMediaQuery } from "usehooks";

export const useIsMobile = () => {
  return useMediaQuery("(max-width: 768px)");
};

export const useIsDesktop = () => {
  return useMediaQuery("(min-width: 768px)");
};