import React, { useState } from "react";
import "./AddForm.css";

export default function AddForm({ student, setStudent }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  const saveStudent = (e) => {
    e.preventDefault();
    if (!name) {
      alert("กรุณาป้อนข้อมูลด้วยครับ");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender: gender,
      };
      setStudent([...student, newStudent]);
      setName("");
      setGender("male");
    }
  };

  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <button type="submit" className="btn-add">
          save
        </button>
      </form>
    </section>
  );
}
