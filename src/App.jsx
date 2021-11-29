import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaginaInicio from "./pages/PaginaInicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/disc-artist" element={<PaginaInicio />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
