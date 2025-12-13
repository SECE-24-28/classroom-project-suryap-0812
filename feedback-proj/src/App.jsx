import { useContext } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Feedbacks from './Feedbacks'
import AddPost from './AddPost'
import { DataContext } from './context/DataContext.jsx'
import EditPost from './EditPost.jsx'

export default function App() {
  const { search, setSearch } = useContext(DataContext)

  return (
    <>
      <header className="app-header">
        <div className='set'>
        <h1>Feedbacks</h1>
         <input
            id="search-box"
            type="text"
            value={search}
            placeholder="Search by title..."
            onChange={(e) => setSearch(e.target.value)}
          />
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
        </div>
      </header>

      <main className="app-main">
        <Routes>

          <Route path="/home" element={<Feedbacks />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/" element={<Feedbacks />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Routes>
      </main>
    </>
  )
}
