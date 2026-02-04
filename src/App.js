import React from "react";
import Factorial from "./components/Factorial";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>ReactJS Lab Programs</h1>

      <div className="program-section">
        <h2>Factorial of a Number</h2>
        <Factorial />
      </div>
    </div>
  );
}

export default App;