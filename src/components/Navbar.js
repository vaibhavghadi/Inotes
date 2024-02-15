import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import c1 from "../context/NoteContext";
import "../style/Navbar.css";
import LoadingBar from "react-top-loading-bar";

export default function Navbar() {
  const { val1, clear, progress, setProgress } = useContext(c1);

  return (
    <div className="nav1">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {val1() ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/notes">
                      Notes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>

                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li> */}

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      onClick={() => clear()}
                      to="/login"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>vaibhav</li>
              )}
            </ul>

            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
