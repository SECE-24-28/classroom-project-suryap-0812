import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import dataContext from "./dataContext";

function App() {
  const [list, setList] = useState([
    { id: 1, sname: "Vinoth", fee: true },
    { id: 2, sname: "Shiva", fee: false },
    { id: 3, sname: "Harish", fee: true },
  ]);

  const handleDelete = (id) => {
    const newList = list.filter((ls) => ls.id !== id);
    setList(newList);
  };

  const handleCheck = (id) => {
    const newList = list.map((ls) => (ls.id === id ? { ...ls, fee: !ls.fee } : ls));
    setList(newList);
  };

  const addStudent = (sname) => {
    if (!sname || !sname.trim()) return;
    const newId = list.length ? Math.max(...list.map((l) => l.id)) + 1 : 1;
    const student = { id: newId, sname: sname.trim(), fee: false };
    setList((prev) => [student, ...prev]);
  };

  const contextValue = {
    title: "Student List",
    list,
    handleCheck,
    handleDelete,
    addStudent,
  };

  return (
    <dataContext.Provider value={contextValue}>
      <Header />
      <Body />
      <Footer />
    </dataContext.Provider>
  );
}

export default App;