import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';
import UseParam from './UseParam';
import Search from './Search';
import Services from './Services';
const ReactRouter = () => {
  return (
    <>
    <Routes>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route path="/user/:fname/:lname" element={<UseParam/>} />
      <Route exact path="/search" element={<Search/>} />
      <Route exact path="/services" element={<Services/>} />
      <Route element={<Error404/>} />
    </Routes>
    </>
  )
}

export default ReactRouter;