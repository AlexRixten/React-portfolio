import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

import "./static/css/index.css";

import { isDev } from "./libs/is-dev";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      cacheTime: Number.POSITIVE_INFINITY,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      {isDev() && <ReactQueryDevtools />}
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>
);
