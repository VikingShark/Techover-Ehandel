import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from "../context/CartState";

// Mui theme
import theme from "../mui-theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
      
    </CartProvider>
  </StrictMode>,
)
