import React, { useContext, useState } from "react";
import NotesItems from "./NotesItems";
import c1 from "../context/NoteContext";
import "../style/Notes.css";
import Navbar from "./Navbar";

export default function Notes() {
  const value = useContext(c1);
  const { state, setState } = value;

  const [data, setData] = useState({
    id: 0,
    title: "",
    description: "",
    tag: "",
  });

  const show1 = (x) => {
    setData({
      id: x._id,
      title: x.title,
      description: x.description,
      tag: x.tag,
    });
  };

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="note">
      <Navbar />
      <div className="container">
        <h4> Your Notes : </h4>
        <div className="container">
          <div className="row">
            {state.length == 0 ? (
              <div className="container">
                {" "}
                <h1> No Notes To Display </h1>
              </div>
            ) : (
              state.map((e) => {
                return (
                  <div className="col-sm-4" key={e._id}>
                    <NotesItems
                      item={e}
                      show1={show1}
                      change={change}
                      data={data}
                      set={setData}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
