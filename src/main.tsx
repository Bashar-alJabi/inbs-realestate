import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/Theme/theme-provider.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './i18n.ts'
import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (measurementId) {
  ReactGA.initialize(measurementId);
  ReactGA.send("pageview");
} else {
  console.warn("Google Analytics Measurement ID is missing");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
