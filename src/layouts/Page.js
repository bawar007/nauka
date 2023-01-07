import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/ProductPage";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Error from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProductListPage from "../pages/ProductListPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Page;
