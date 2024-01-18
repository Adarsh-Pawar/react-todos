import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className="main">
      <h1>My Todos</h1>
      <div className="card-container">
      <div className='card'>
        <h2>Title</h2>
        <div className='btn-div'>
          <button className='btn'>Delete</button>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
