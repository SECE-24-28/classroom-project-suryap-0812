import React, { useState } from "react";

export const Body = ({ list, handleCheck, handleDelete, addStudent }) => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addStudent(name);
    setName("");
  };

  const displayed = list.filter((ls) =>
    ls.sname.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="body">
      <div className="search-row">
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search students..."
          aria-label="Search students"
        />
      </div>

      <form className="add-form" onSubmit={onSubmit}>
        <input
          className="add-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
        <button className="add-btn" type="submit">
          Add Student
        </button>
      </form>

      <ul className="student-list">
        {displayed.length ? (
          displayed.map((ls) => (
            <li className="student-item" key={ls.id}>
              <input
                className="student-checkbox"
                type="checkbox"
                checked={ls.fee}
                onChange={() => handleCheck(ls.id)}
              />
              <label className="student-label">{ls.sname}</label>
              <button className="delete-btn" onClick={() => handleDelete(ls.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="student-item no-results">No students found</li>
        )}
      </ul>
    </div>
  );
};
