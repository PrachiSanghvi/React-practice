import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navbar';
import '../Common.css';
import Quiz from '../pages/Quiz';
import Contact from '../pages/Contact';
import About from '../pages/About';
import HPSlider from '../component/HPSlider';
import HPCollection from '../component/HPCollection';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HPSlider />
      <HPCollection />
      <Routes>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Homepage