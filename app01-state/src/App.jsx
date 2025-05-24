import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div className="d-flex justify-content-evenly">
        <button
          onClick={() => {
            setCount(count - 1);
            console.log(count);
          }}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
