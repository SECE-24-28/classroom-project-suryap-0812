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
      await addPost({ name, email, title, message })
      // reset local fields
      setName('')
      setEmail('')
      setTitle('')
      setMessage('')
      navigate('/fb')
    alert('Feedback added successfully!')
  }

  return (
    <section className="add-post">
    <h2>Add Feedback</h2>
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
        <button type="submit" >
          {loading ? 'Adding...' : 'Add Feedback'}
        </button>
      </form>
    </section>
  )
}