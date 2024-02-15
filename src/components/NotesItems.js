import React, { useRef, useState } from "react";
import "../style/NotesItem.css";
import { useContext } from "react";
import c1 from "../context/NoteContext";
import { NavLink } from "react-router-dom";

export default function NotesItems(props) {
  const value = useContext(c1);
  const { erase, update } = value;
  const { item, change, show1, data, set } = props;
  const ref = useRef(null);
  const submit = (x) => {
    x.preventDefault();
    update(data);
    set({ title: "", description: "", tag: "" });
    ref.current.click();
  };

  return (
    <>
      <div className="card" style={{ width: "15rem", height: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {item.title}{" "}
            <span>
              {" "}
              <i
                className="fa-solid fa-trash mx-1"
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Do you really want to delete this note?"
                  );
                  if (confirmBox === true) {
                    erase(item._id);
                  }
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-1"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                onClick={() => {
                  show1(item);
                }}
              ></i>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Update
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={(e) => submit(e)}>
                        <div className="mb-3">
                          <label htmlFor="title" className="col-form-label">
                            Title :
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={(e) => change(e)}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="description"
                            className="col-form-label"
                          >
                            Description :
                          </label>
                          <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => change(e)}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="tag" className="col-form-label">
                            Tag :
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={data.tag}
                            onChange={(e) => change(e)}
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            ref={ref}
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <input
                            type="submit"
                            className="btn btn-primary"
                            value="Submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </h5>
          <br></br>
          <p className="card-text">
            <b>Description</b> : {item.description}
          </p>
          <p className="card-text">
            <b>Tag</b> : {item.tag}
          </p>
          <NavLink to="#" className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
}
