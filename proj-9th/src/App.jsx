import { useState, useEffect } from "react";
import api from './api/stu_api';

export default function App() {
  const [SList, setSList] = useState([]);

  useEffect(() => {
    const fetData = async () => {
      try {
        // db.json exposes the resource under the "student" key (singular)
        const res = await api.get('/student');
        setSList(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetData();
  }, []);

  return (
    <>
      <h1>Student List</h1>
      <ul>
        {SList.map((st) => (
          <li key={st.id}>
            <p>{st.name}</p>
            <p>Age: {st.age}</p>
            <p>Grade: {st.grade}</p>
          </li>
        ))}
      </ul>
    </>
  );
}