import { useContext } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Feedbacks from './Feedbacks'
import AddPost from './AddPost'
import { DataContext } from './context/DataContext.jsx'
<<<<<<< HEAD
import EditPost from './EditPost.jsx'
=======
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d

export default function App() {
  const { search, setSearch } = useContext(DataContext)

  return (
    <>
      <header className="app-header">
<<<<<<< HEAD
        <div className='set'>
        <h1>Feedbacks</h1>
         <input
=======
        <h1>Feedbacks</h1>
        <nav id="link">
          <Link to="/home">Home</Link>
          <Link to="/addpost">Add-Post</Link>
        </nav>
        <div className="search-wrap">
          <input
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
            id="search-box"
            type="text"
            value={search}
            placeholder="Search by title..."
            onChange={(e) => setSearch(e.target.value)}
          />
<<<<<<< HEAD
          <nav id="link">
            <Link to="/home">Home</Link>
            <Link to="/addpost">Add-Post</Link>
          </nav>
          
        </div>
        <div className="search-wrap">
          {/* <input
            id="search-box"
            type="text"
            value={search}
            placeholder="Search by title..."
            onChange={(e) => setSearch(e.target.value)}
          /> */}
=======
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
        </div>
      </header>

      <main className="app-main">
        <Routes>

          <Route path="/home" element={<Feedbacks />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/" element={<Feedbacks />} />
<<<<<<< HEAD
          <Route path="/editpost/:id" element={<EditPost />} />
=======
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
        </Routes>
      </main>
    </>
  )
}
