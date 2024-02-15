import NoteState from "./context/NoteState";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Notes from "./components/Notes";
import User from "./components/User";
import Private from "./components/Private";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <div>
            <Routes>
              <Route element={<Private />}>
                <Route path="/" element={<Home />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/about" element={<About />} />
              </Route>
              <Route path="/login" element={<User />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
