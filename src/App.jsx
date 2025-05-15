import Dashboard from "./components/Dashboard";
import AppMainContextProvider from "./providers/AppMainProvider";
import CountryDataProvider from "./providers/CountryDataProvider";

function App() {
  return (
    <AppMainContextProvider>
      <CountryDataProvider>
        <Dashboard />
      </CountryDataProvider>
    </AppMainContextProvider>
  );
}

export default App;
