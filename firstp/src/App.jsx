import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  let [val, val1] = useState(0)
  return (
    <>
      <div className="cont nav">
        <div className='nav'>
          <img src={reactLogo} alt="React Logo" />
          <h1>Welcome to My Page!</h1>
        </div>
        <div className='nav-items'>
          <ul className='nav-items' style={{listStyle: 'none'}}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
