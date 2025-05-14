import Dashboard from "./components/Dashboard";
import AppMainContextProvider from "./providers/AppMainContextProvider";

function App() {
  return (
    <AppMainContextProvider>
      <Dashboard />
    </AppMainContextProvider>
  );
}

export default App;
