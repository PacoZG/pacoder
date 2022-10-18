import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Div from '../components/private/Div'
import WhatYouGet from '../components/WhatYouGet'
import './App.css'

const App = () => {
  return (
    <Div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/cv/presentation" />} />
          <Route path="/cv/presentation" element={<Presentation />} />
          <Route path="/cv/skills_strenghts" element={<WhatYouGet />} />
          <Route path="/cv/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Div>
  )
}

export default App
