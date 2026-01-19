import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import App from "@/app";
import { BrowserRouter } from "react-router-dom";
import "@/styles/global.css"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

scan({
  enabled: true,
});
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
