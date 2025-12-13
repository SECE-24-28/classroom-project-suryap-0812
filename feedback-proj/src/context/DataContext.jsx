import { createContext, useState, useEffect } from 'react'
import api from '../api/Post'

export const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])

<<<<<<< HEAD
=======
  // fetch posts
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
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

<<<<<<< HEAD
=======
  // update filtered results when posts or search changes
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
  useEffect(() => {
    const q = (search || '').trim().toLowerCase()
    if (!q) {
      setResult(posts)
      return
    }
<<<<<<< HEAD
    const filtered = posts.filter((p) => (p.title).toLowerCase().includes(q))
    setResult(filtered)
  }, [posts, search])

  const addPost = async ({ name, email, title, message }) => {
    // const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const id = posts.length + 1
=======
    const filtered = posts.filter((p) => (p.title || '').toLowerCase().includes(q))
    setResult(filtered)
  }, [posts, search])

  // add post helper
  const addPost = async ({ name, email, title, message }) => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
    const datetime = new Date().toISOString()
    try {
      const newPost = { id, name, email, title, message, datetime }
      const res = await api.post('/feedback', newPost)
      const updated = [...posts, res.data]
      setPosts(updated)
<<<<<<< HEAD
=======
      // update result based on current search
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
      const q = (search || '').trim().toLowerCase()
      if (!q) setResult(updated)
      else setResult(updated.filter((p) => (p.title || '').toLowerCase().includes(q)))
      return res.data
    } catch (e) {
      console.error('Error adding post', e)
      throw e
    }
  }

<<<<<<< HEAD
  const editPost = async (id, updates) => {
    try {
      const existing = posts.find((p) => String(p.id) === String(id))
      if (!existing) throw new Error('Post not found')
      const updatedPost = { ...existing, ...updates }
      const res = await api.put(`/feedback/${id}`, updatedPost)
      const updated = posts.map((p) => (String(p.id) === String(id) ? res.data : p))
      setPosts(updated)
      const q = (search || '').trim().toLowerCase()
      if (!q) setResult(updated)
      else setResult(updated.filter((p) => (p.title || '').toLowerCase().includes(q)))
      return res.data
    } catch (e) {
      console.error('Error editing post', e)
      throw e
    }
  }

  const deletePost = async (id) => {
    try {
      await api.delete(`/feedback/${id}`)
      const updated = posts.filter((p) => String(p.id) !== String(id))
      setPosts(updated)
      const q = (search || '').trim().toLowerCase()
      if (!q) setResult(updated)
      else setResult(updated.filter((p) => (p.title || '').toLowerCase().includes(q)))
      return true
    } catch (e) {
      console.error('Error deleting post', e)
      throw e
    }
  }

=======
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
  const value = {
    posts,
    result,
    search,
    setSearch,
    addPost,
    setPosts,
<<<<<<< HEAD
    editPost,
    deletePost,
=======
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

