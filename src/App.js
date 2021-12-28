import Header from './components/Header'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import Presentation from './components/Presentation'
import WhatYouGet from './components/WhatYouGet'
import Experience from './components/Experience'

const App = () => {
  return (
    <div
      className="bg-contain bg-center"
      style={{
        background: `url(https://res.cloudinary.com/dbn5gpgi5/image/upload/c_scale,h_1080/v1640678894/fcecx1i2xc2d9vumxyjj.jpg)`,
      }}
    >
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
