import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navbar';
import '../Common.css';
import '../Pages.css'
import Quiz from '../pages/Quiz';
import Contact from '../pages/Contact';
import About from '../pages/About';
import HPSlider from '../component/HPSlider';
import HPCollection from '../component/HPCollection';
import HPRandomQuote from '../component/HPRandomQuote';
import Footer from '../component/Footer';
import PageNotFound from './PageNotFound';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HPSlider />
      <Routes>
        <Route path="/Quiz"  element={<Quiz/>}/>
        <Route path="/Contact"  element={<Contact/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="*"  element={<PageNotFound /> }/>
      </Routes>
      <HPCollection />
      <HPRandomQuote />
      <Footer />
    </div>
  )
}

export default Homepage