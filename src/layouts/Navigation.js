import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", state: "start" },
  { name: "produkty", path: "/products", state: "produkty" },
  { name: "kontakt", path: "/contact", state: "kontakt" },
  { name: "panel admin", path: "/admin", state: "panel admina" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} state={item.state}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
