import { createContext, useState, useEffect } from 'react'
import api from '../api/Post'

export const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])

  // fetch posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/feedback')
        setPosts(res.data)
      } catch (e) {
        console.error('Error loading data', e)
      }
    }
    fetchData()
  }, [])

  // update filtered results when posts or search changes
  useEffect(() => {
    const q = (search || '').trim().toLowerCase()
    if (!q) {
      setResult(posts)
      return
    }
    const filtered = posts.filter((p) => (p.title || '').toLowerCase().includes(q))
    setResult(filtered)
  }, [posts, search])

  // add post helper
  const addPost = async ({ name, email, title, message }) => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = new Date().toISOString()
    try {
      const newPost = { id, name, email, title, message, datetime }
      const res = await api.post('/feedback', newPost)
      const updated = [...posts, res.data]
      setPosts(updated)
      // update result based on current search
      const q = (search || '').trim().toLowerCase()
      if (!q) setResult(updated)
      else setResult(updated.filter((p) => (p.title || '').toLowerCase().includes(q)))
      return res.data
    } catch (e) {
      console.error('Error adding post', e)
      throw e
    }
  }

  const value = {
    posts,
    result,
    search,
    setSearch,
    addPost,
    setPosts,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

