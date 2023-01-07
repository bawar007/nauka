import React from "react";
import { Navigate } from "react-router-dom";

const permission = true;
//ADmin
const Admin = () => {
  return permission ? <h3>Witaj w panelu admina</h3> : <Navigate to="/login" />;
};

export default Admin;
