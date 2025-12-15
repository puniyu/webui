"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Provider(props: ColorModeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
