import { Provider } from "@/components/ui/provider";
import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import App from "@/app";
import { BrowserRouter } from "react-router-dom";
import "@/styles/tailwind.css";
import "@/styles/font.scss";
import "@/styles/global.scss";
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
        <Provider>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
