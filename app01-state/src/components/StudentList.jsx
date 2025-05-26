import React, { useState } from "react";
import "./Studentlist.css";
import Item from "./Item";

export default function Studentlist() {
  const [student, setStudent] = useState([
    { id: 1, name: "Student1" },
    { id: 2, name: "Student2" },
    { id: 3, name: "Student3" },
  ]);

  const [show, setShow] = useState(true);

  function deleteStudent(id) {
    setStudent(student.filter((item) => item.id != id));
  }

  return (
    <div>
      <ul>
        <div className="header">
          <h3>All students : {student.length} </h3>
          <button onClick={() => setShow(!show)}>
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          student.map((item) => (
            <Item id={item.id} name={item.name} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </div>
  );
}
