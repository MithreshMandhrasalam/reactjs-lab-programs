import React, { useState } from "react";
import "./Fibonacci.css";

function Fibonacci() {
  const [count, setCount] = useState("");
  const [series, setSeries] = useState([]);

  const generateFibonacci = () => {
    let n = parseInt(count);
    if (isNaN(n) || n <= 0) {
      setSeries([]);
      return;
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    setSeries(fib.slice(0, n));
  };

  return (
    <div className="fib-container">
      <input
        type="number"
        className="fib-input"
        placeholder="Enter number of terms"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button className="fib-button" onClick={generateFibonacci}>
        Generate
      </button>

      {series.length > 0 && (
        <div className="fib-result">
          Result: {series.join(", ")}
        </div>
      )}
    </div>
  );
}

export default Fibonacci;