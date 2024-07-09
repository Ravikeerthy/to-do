import React, { useState } from "react";
import "./Styless/inputcomp.css";

const InputComp = ({ addTodoData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addBtn = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description.");
      return;
    }
    addTodoData(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <section className="container">
      <div>
        <div className="text-center">
          <h1 style={{ color: "#157447" }}>To-Do App</h1>
        </div>
        <div
          className="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-evenly mt-5"
          id="inputs"
        >
          <input
            className="form-control w-25 "
            id="Search-input"
            name="Title"
            placeholder="Todo Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="form-control w-25"
            name="description"
            placeholder="Todo Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={addBtn} style={{
            backgroundColor: "#157447",
            color: "white",
            border: "none",
            borderRadius: "15px",
          }}>Add Task</button>
        </div>
      </div>
    </section>
  );
};

export default InputComp;
