import AppMainContextProvider from "./providers/AppMainProvider";
import CountryDataProvider from "./providers/CountryDataProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App({ children }) {
  const queryClient = new QueryClient();
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppMainContextProvider>
          <CountryDataProvider>{children}</CountryDataProvider>
        </AppMainContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
