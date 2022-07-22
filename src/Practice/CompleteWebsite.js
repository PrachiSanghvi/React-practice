import React from 'react';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './Component/HeroSection';
import '../App.css';
import Home from './Component/pages/Home';
import Services from './Component/pages/Services';
import Products from './Component/pages/Products';
import SignUp from './Component/pages/SignUp'
const CompleteWebsite = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default CompleteWebsite