import './App.css'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import React from 'react'

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
    </>
  )
}

export default App
