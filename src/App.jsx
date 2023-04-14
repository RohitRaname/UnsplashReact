import { ToggleTheme } from "./ToggleTheme";
import "./App.css";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import { useAppContext } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const { theme } = useAppContext();
  return (
    <main>
      <section className="section">
        <ToggleTheme />
        <SearchForm />

        <Gallery />
      </section>
    </main>
  );
}

export default App;
