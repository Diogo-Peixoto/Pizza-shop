import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./global.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster position="top-right" richColors />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
