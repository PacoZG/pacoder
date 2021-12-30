import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import WhatYouGet from '../components/WhatYouGet'
import Experience from '../components/Experience'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/cv/presentation" />} />
          <Route path="/cv/presentation" element={<Presentation />} />
          <Route path="/cv/skills_strenghts" element={<WhatYouGet />} />
          <Route path="/cv/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
