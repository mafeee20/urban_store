import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import { CartProvider } from "./feactures/cart/context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
