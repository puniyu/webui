import { Provider } from "@/components/ui/provider";
import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import App from "@/app";
import { BrowserRouter } from "react-router-dom";
import "@/styles/tailwind.css";
import "@/styles/font.scss";
import "@/styles/global.scss";
import React from "react";

scan({
  enabled: true,
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
