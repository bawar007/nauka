import { Route, Routes, useLocation, useParams } from "react-router-dom";
import React from "react";
import "../styles/Footer.css";

function ProfilePage() {
  let { page } = useParams();
  let c = useLocation();
  return (
    <>
      <p>
        Jesteś na stronie <span>{page !== undefined ? page : c.state}</span>
      </p>
      <p>Jesteś path {c.pathname}</p>
    </>
  );
}

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/products" element={<ProfilePage />} />
        <Route path="/product/:page" element={<ProfilePage />} />
        <Route path="/contact" element={<ProfilePage />} />
        <Route path="/admin" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default Footer;
