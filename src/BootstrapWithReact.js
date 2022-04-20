import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import HomePage from './HomePage';
import Search from './Search';

const BootstrapWithReact = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  )
}

export default BootstrapWithReact