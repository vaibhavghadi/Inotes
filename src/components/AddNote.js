import React, { useState } from "react";
import c1 from "../context/NoteContext";
import { useContext } from "react";
import Valid from "../schema/Valid";
import { useFormik } from "formik";
import "../style/AddNotes.css";

export default function AddNote() {
  const value = useContext(c1);
  const { add } = value;

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      tag: "",
    },
    validationSchema: Valid,
    onSubmit: (values, action) => {
      add(values);
      alert("Note Is Successfully Added");
      action.resetForm();
    },
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-3">
          <label htmlFor="title" className="form-label">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Add Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title ? (
            <p className="error"> {errors.title.toUpperCase()}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description :
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && touched.description ? (
            <p className="error"> {errors.description.toUpperCase()}</p>
          ) : null}
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="tag" className="form-label">
            Tag :
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Add Tag"
            value={values.tag}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tag && touched.tag ? (
            <p className="error"> {errors.tag.toUpperCase()}</p>
          ) : null}
        </div>
        <input
          disabled={!(isValid && dirty)}
          type="submit"
          className="org"
          value="Add Note"
        />
      </form>
    </div>
  );
}
