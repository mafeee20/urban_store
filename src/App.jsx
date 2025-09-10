import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./feactures/shared/components/Header/Header";
import { Footer } from "./feactures/shared/components/Footer/Footer";
import { DashboardPage } from "./feactures/dashboard/pages/DashboardPage";
import { StorePage } from "./feactures/store/pages/StorePage";
import { CartPage } from "./feactures/cart/pages/CartPage";
import { ContactPage } from "./feactures/contact/pages/ContactPage";
import { NosotrosPage } from "./feactures/about/pages/nosotrosPage";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container py-4">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/tienda" element={<StorePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

