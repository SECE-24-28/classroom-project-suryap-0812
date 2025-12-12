import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function WelcomeMessage() {
  return <h1>Welcome to the App!</h1>
}

function ByebeMessage(){
  return <h1>Byebe to the App!</h1>
}

function Startpage(){
  return (
  <ul>
   <li><Link to="/hom">Home</Link></li>
   <li><Link to="/about">About</Link></li>
   <li><Link to="/gallary">Gallary</Link></li>
   <li><Link to="/postpage">PostPage</Link></li>
  </ul>
  )
}

function GallaryMessage(){
  return <h1>This is the Gallary Page</h1>
}

function Postpage(){
  return (
    <div>
      <ul>
        <li>Post 1: Learning React Router</li>
        <li>Post 2: Building Single Page Applications</li>
        <li>Post 3: Navigating with React Router</li>
      </ul>
      <Outlet />
    </div>
  )
}
function SinglePost() {
  const { postId } = useParams();
  return <h3>You are viewing Post ID: {postId}</h3>;
}

export default function App() {

  return (
<>
    <BrowserRouter>
    <Startpage />
    <Routes>
      <Route path="/hom" element={<WelcomeMessage />} />
      <Route path="/about" element= {<ByebeMessage />} />
      <Route path="/gallary" element= {<GallaryMessage />} />
      
      <Route path="/postpage" element= {<Postpage />} >
        <Route path=":postId" element={<SinglePost />} />
      </Route>
    </Routes>
    </BrowserRouter>
</>
  )
}


