import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from "./api/Api.jsx"
import {getCourses, addCourses, getUsers} from './api/Api.jsx'

function App() {
  const [title, setTitle] = useState("")
  const [courses, setCourses] = useState([])
  const [users, setUsers] = useState([])

    const fetchCourse =async () => {
    const response = await getCourses()
    setCourses(response)
  }
 
    useEffect(() => {
        fetchCourse()
    }, [])

    const handleSubmit = async (e) => {
        // e.preventDefault()
        const newCourse = {title, duration:"2 months"}
        await addCourses(newCourse)
        fetchCourse()
        // setTitle("")
    }

  return ( 
    <>
        <form action="">
          <input
              type="text"
              placeholder="Enter Course"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          {/* <input type="text" placeholder='Enter User' value={user} onChange={(e) => setUser(e.target.value)} /> */}
          <ul>
            {
            courses.map(course => 
                <li>
                    {course.title} - {course.duration}
                </li> )   
            }
          </ul>
          <button onClick={handleSubmit}>Add Course</button>
        </form>
    </>
  )
}

export default App

