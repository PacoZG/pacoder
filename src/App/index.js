import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Health from '../components/Health/Health'
import Presentation from '../components/Presentation'
import Div from '../components/private/Div'
import WhatYouGet from '../components/WhatYouGet'
import './App.css'
import FreelanceMainPage from '../components/FreelanceMainPage/FreelanceMainPage'
import Footer from '../components/Footer/Footer'

const App = () => {
  return (
    <Div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<FreelanceMainPage />} />
          <Route path="/cv/presentation" element={<Presentation />} />
          <Route path="/cv/skills_strenghts" element={<WhatYouGet />} />
          <Route path="/cv/experience" element={<Experience />} />
          <Route path="/health" element={<Health />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Div>
  )
}

export default App
