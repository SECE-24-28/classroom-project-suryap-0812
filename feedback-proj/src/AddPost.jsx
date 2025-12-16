import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from './context/DataContext.jsx'

export default function AddPost() {
  const { addPost } = useContext(DataContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return alert('Title is required')
    setLoading(true)
<<<<<<< HEAD
=======
    try {
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
      await addPost({ name, email, title, message })
      // reset local fields
      setName('')
      setEmail('')
      setTitle('')
      setMessage('')
      navigate('/fb')
<<<<<<< HEAD
    alert('Feedback added successfully!')
=======
    } catch (err) {
      console.error('Failed to add post', err)
      alert('Failed to add post')
    } finally {
      setLoading(false)
    }
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
  }

  return (
    <section className="add-post">
<<<<<<< HEAD
    <h2>Add Feedback</h2>
=======
      <h2>Add Feedback</h2>
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Message
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
<<<<<<< HEAD
        <button type="submit" >
=======
        <button type="submit" disabled={loading}>
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
          {loading ? 'Adding...' : 'Add Feedback'}
        </button>
      </form>
    </section>
  )
}