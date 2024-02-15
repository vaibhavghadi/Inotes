import React, { useContext, useEffect } from "react";
import c1 from "../context/NoteContext";
import Navbar from "./Navbar";

export default function About() {
  const value = useContext(c1);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1> this is About Page</h1>
      </div>
    </div>
  );
}
