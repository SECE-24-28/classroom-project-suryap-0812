import { DataContext } from './context/DataContext.jsx'
import { useContext } from 'react'

export default function Feedbacks({ post = [] }) {
    const { result } = useContext(DataContext)

   if (!result || result.length === 0) return <p>No feedbacks</p>

  return (
    <div className="feed-list">
      {result.map(p => (
        <article className="feed-card" key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.id}</p>
          <p className="meta">{p.name}</p> 
          <p>{p.email}</p>
          <p>{p.message}</p>
<<<<<<< HEAD
          <a href={`/editpost/${p.id}`}>Edit</a>
=======
>>>>>>> 53460a660aa50b4f90153212fd9a502a48c2ba1d
        </article>
      ))}
    </div>
  )
}