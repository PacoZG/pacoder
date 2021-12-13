import Header from './components/Header'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import Presentation from './components/Presentation'
import WhatYouGet from './components/WhatYouGet'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/intro" />} />
          <Route path="/intro" element={<Presentation />} />
          <Route path="/skills_strenghts" element={<WhatYouGet />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
