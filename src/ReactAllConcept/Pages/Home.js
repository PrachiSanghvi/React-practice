import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'
const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Navigation />
      {/* Shared Layout */}
      <Outlet />
    </div>
  )
}

export default Home