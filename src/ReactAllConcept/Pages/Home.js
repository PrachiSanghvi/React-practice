import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'
import LoginPage from './LoginPage'
import ProductPage from './ProductPage'
const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Navigation />
      {/* Shared Layout */}
      <Outlet />
      <LoginPage />
      <ProductPage />
    </div>
  )
}

export default Home