import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Subjects from "./components/Subjects";
import Classes from "./components/Classes";
import Teachers from "./components/Teachers";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/subjects">Subjects</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/classes" element={<Classes/>} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route
              path="/"
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
