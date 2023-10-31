import { useState } from 'react'
import './App.css'
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hem from './components/Hem.jsx'
// import Om from './components/Om.jsx'
// import Tjanster from './components/Tjanster.jsx'
// import Priser from './components/Priser.jsx'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Hem/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
