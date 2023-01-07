import React from "react";
import "../styles/Header.css";
import { Route, Routes } from "react-router-dom";

import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";

const Imgrender = (props) => <img src={props.src} alt={props.alt} />;

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Imgrender src={header3} alt="kon" />} />
        <Route
          path="/products"
          element={<Imgrender src={header1} alt="kon" />}
        />
        <Route
          path="/contact"
          element={<Imgrender src={header2} alt="statek" />}
        />
        <Route
          path="/admin"
          element={<Imgrender src={header3} alt="domek" />}
        />
        <Route path="*" element={<Imgrender src={header3} alt="domek" />} />
      </Routes>
    </>
  );
};

export default Header;
