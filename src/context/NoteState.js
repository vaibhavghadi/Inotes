import c1 from "./NoteContext";

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const NoteState = (props) => {
  const url = "http://localhost:4500";

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      show();
    } else {
      <Navigate to="/login" />;
    }
  });

  const val1 = () => {
    return localStorage.getItem("user");
  };

  const val2 = (name, token) => {
    localStorage.setItem("user", name);
    localStorage.setItem("token", token);
  };

  const clear = () => {
    return localStorage.clear();
  };

  const show = async () => {
    const data = await fetch(`${url}/getNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const result = await data.json();
    setState(result);
  };

  const add = async (e) => {
    setProgress(30);
    setProgress(50);
    const data = await fetch(`${url}/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: e.title,
        description: e.description,
        tag: e.tag,
      }),
    });
    setProgress(100);
  };

  const erase = async (id) => {
    setProgress(40);
    const data = await fetch(`${url}/deleteNotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    setProgress(70);
    const val = await data.json();
    setProgress(100);
  };

  const update = async (x) => {
    setProgress(30);
    const data = await fetch(`${url}/updateNotes/${x.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: x.title,
        description: x.description,
        tag: x.tag,
      }),
    });
    setProgress(100);
  };

  const [state, setState] = useState([]);

  return (
    <c1.Provider
      value={{
        state,
        setState,
        add,
        erase,
        update,
        val1,
        clear,
        val2,
        progress,
        setProgress,
      }}
    >
      {props.children}
    </c1.Provider>
  );
};

export default NoteState;
