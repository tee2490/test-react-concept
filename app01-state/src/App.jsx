import React, { useState } from "react";
import "./App.css";

export default function App() {
  const data = [
    { id: 1, name: "Tee01" },
    { id: 2, name: "Tee02" },
    { id: 3, name: "Tee03" },
    { id: 4, name: "Tee04" },
    { id: 5, name: "Tee05" },
  ];

  const [student, setStudent] = useState(data);

  return (
    <div className="container">
      <h1>Total : {student.length}</h1>
      {student.map((item) => (
        <p key={item.id}>
          {item.id} {item.name}{" "}
          <button type="button" class="btn btn-success">
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}
