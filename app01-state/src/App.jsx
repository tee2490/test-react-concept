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
  const [show, setShow] = useState(true);

  function delData(id) {
    if (confirm("Confirm delete") == false) return
    
    var temp = student.filter((item) => item.id != id);
    setStudent(temp);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-evenly">
        <h1>Total : {student.length}</h1>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="btn btn-primary"
        >
          {show ? "Hidden" : "Show"}
        </button>
      </div>
      {show &&
        student.map((item) => (
          <p key={item.id}>
            {item.id} {item.name}{" "}
            <button
              onClick={() => delData(item.id)}
              type="button"
              class="btn btn-success"
            >
              Delete
            </button>
          </p>
        ))}
    </div>
  );
}
