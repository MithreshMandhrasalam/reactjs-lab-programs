import React, { useState } from "react";
import "./Factorial.css";

function Factorial() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    let n = parseInt(number);
    if (isNaN(n) || n < 0) {
      setResult("Please enter a valid non-negative number");
      return;
    }

    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    setResult(fact);
  };

  return (
    <div className="factorial-card">
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={calculateFactorial}>Calculate</button>

      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default Factorial;