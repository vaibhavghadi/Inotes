import React, { useContext } from "react";
import AddNote from "./AddNote";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <AddNote />
      </div>
    </div>
  );
}
