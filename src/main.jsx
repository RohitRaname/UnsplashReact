import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>



    <QueryClientProvider client={new QueryClient()}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </AppProvider>
);


// appprovider
// > queryClientProvider
// >> only fetch data when key is different (save all keys) 

// caching 