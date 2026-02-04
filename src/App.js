import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FactorialPage from "./pages/FactorialPage";
import FibonacciPage from "./pages/FibonacciPage";
import "./App.css";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Factorial</Link>
        <Link to="/fibonacci">Fibonacci</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FactorialPage />} />
        <Route path="/fibonacci" element={<FibonacciPage />} />
      </Routes>
    </>
  );
}

export default App;