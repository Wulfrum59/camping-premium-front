import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'
import Contact from './pages/Contact.jsx'
import TenteReservation from './pages/hebergementTente.jsx'
import AppartementReservation from './pages/hebergementappartement.jsx'
import MaisonReservation from './pages/hebergementmaison.jsx'
import MobilhomeReservation from './pages/hebergementmobilhome.jsx'
import App from './App.jsx'
import Payment from './pages/payment.jsx'
import DashboardPremium from './pages/dashboardPremium.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPremium />} />
        <Route path="/*" element={<App />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tente" element={<TenteReservation />} />
        <Route path="/mobilhome" element={<MobilhomeReservation />} />
        <Route path="/appartement" element={<AppartementReservation />} />
        <Route path="/maison" element={<MaisonReservation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);