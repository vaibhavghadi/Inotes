import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import c1 from "../context/NoteContext";

export default function Private() {
  const data = localStorage.getItem("user");

  return data ? <Outlet /> : <Navigate to="/login" />;
}
