import React, { useContext, useState } from "react";
import "../style/User.css";
import login1 from "../images/login.png";
import { useNavigate } from "react-router-dom";
import c1 from "../context/NoteContext";
import { useFormik } from "formik";
import { signin } from "../schema/User1";
import { signup } from "../schema/User1";
import Navbar from "./Navbar";

export default function User() {
  const { val2, setProgress } = useContext(c1);
  let navigate = useNavigate();
  const url = "http://localhost:4500";

  const log = useFormik({
    initialValues: {
      email2: "",
      password2: "",
    },
    validationSchema: signin,
    onSubmit: async (values, action) => {
      setProgress(20);
      const result = await fetch(`${url}/login`, {
        method: "post",
        body: JSON.stringify({
          email: values.email2,
          password: values.password2,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProgress(40);

      const data = await result.json();

      if (data.token) {
        const name = data.name;
        const token = data.token;
        setProgress(70);
        alert("login");
        val2(name, token);
        navigate("/");
        setProgress(100);
      } else {
        setProgress(70);
        alert("User Not Registerd");
        action.resetForm();
        setProgress(100);
      }
    },
  });

  const reg = useFormik({
    initialValues: {
      name1: "",
      email1: "",
      password1: "",
    },
    validationSchema: signup,
    onSubmit: async (values, action) => {
      const result1 = await fetch("http://localhost:4500/register", {
        method: "post",
        body: JSON.stringify({
          name: reg.values.name1,
          email: reg.values.email1,
          password: reg.values.password1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProgress(30);

      const data = await result1.json();
      setProgress(40);

      if (data.token) {
        alert("You Registered Successfully !!!");
        setProgress(70);
        navigate("/login");
        action.resetForm();
        setProgress(100);
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={login1} alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={log.handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box mb-3 my-3">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      id="email2"
                      name="email2"
                      placeholder="Enter your email"
                      required
                      value={log.values.email2}
                      onChange={log.handleChange}
                      onBlur={log.handleBlur}
                    />
                  </div>
                  {log.errors.email2 && log.touched.email2 ? (
                    <p className="error"> {log.errors.email2.toUpperCase()}</p>
                  ) : null}
                  <div className="input-box mb-3 my-3">
                    <i className="fas fa-lock"></i>
                    <input
                      type="text"
                      id="password2"
                      name="password2"
                      placeholder="Enter your password"
                      required
                      value={log.values.password2}
                      onChange={log.handleChange}
                      onBlur={log.handleBlur}
                    />
                  </div>
                  {log.errors.password2 && log.touched.password2 ? (
                    <p className="error">
                      {" "}
                      {log.errors.password2.toUpperCase()}
                    </p>
                  ) : null}
                  <div className="text">
                    <a href="/user">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input
                      type="submit"
                      value="Submit"
                      disabled={!(log.isValid && log.dirty)}
                    />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label htmlFor="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={reg.handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box mb-3 my-3">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="name1"
                      name="name1"
                      placeholder="Enter your name"
                      required
                      value={reg.values.name1}
                      onChange={reg.handleChange}
                      onBlur={reg.handleBlur}
                    />
                  </div>
                  {reg.errors.name1 && reg.touched.name1 ? (
                    <p className="error"> {reg.errors.name1.toUpperCase()}</p>
                  ) : null}
                  <div className="input-box mb-3 my-3">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      id="email1"
                      name="email1"
                      placeholder="Enter your email"
                      required
                      value={reg.values.email1}
                      onChange={reg.handleChange}
                      onBlur={reg.handleBlur}
                    />
                  </div>
                  {reg.errors.email1 && reg.touched.email1 ? (
                    <p className="error"> {reg.errors.email1.toUpperCase()}</p>
                  ) : null}
                  <div className="input-box mb-3 my-3">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      id="password1"
                      name="password1"
                      placeholder="Enter your password"
                      required
                      value={reg.values.password1}
                      onChange={reg.handleChange}
                      onBlur={reg.handleBlur}
                    />
                  </div>
                  {reg.errors.password1 && reg.touched.password1 ? (
                    <p className="error">
                      {" "}
                      {reg.errors.password1.toUpperCase()}
                    </p>
                  ) : null}
                  <div className="button input-box">
                    <input
                      type="submit"
                      value="Sumbit"
                      disabled={!(reg.isValid && reg.dirty)}
                    />
                  </div>

                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
