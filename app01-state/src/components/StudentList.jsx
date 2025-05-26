import React, { useState } from "react";
import "./Studentlist.css";
import Item from "./Item";
import AddForm from "./AddForm";

export default function Studentlist() {
  const [student, setStudent] = useState([
    { id: 1, name: "Student1", gender:"male" },
    { id: 2, name: "Student2", gender:"female" },
    { id: 3, name: "Student3", gender:"male" },
  ]);

  const [show, setShow] = useState(true);

  function deleteStudent(id) {
    setStudent(student.filter((item) => item.id != id));
  }

  return (
    <div>
      <AddForm student={student} setStudent={setStudent}/>
      <ul>
        <div className="header">
          <h3>All students : {student.length} </h3>
          <button onClick={() => setShow(!show)}>
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          student.map((item) => (
            <div key={item.id}>
              <Item item={item} deleteStudent={deleteStudent} />
              </div>
           ))}
      </ul>
    </div>
  );
}
