import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Academia from './pages/Academia'
import Industry from './pages/Industry'
import ContactUs from './pages/ContactUs'
import Projects from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academia' element={<Academia />} />
        <Route path='/industry' element={<Industry />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
