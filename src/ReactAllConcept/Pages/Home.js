import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'
import LoginPage from './LoginPage'
import ProductPage from './ProductPage'
import CollectionPage from './CollectionPage'
const Home = () => {
  // const state = store.getState();
  return (
    <div className="home-page-wrapper">
      <Navigation />
      {/* Shared Layout */}
      <Outlet />
    </div>
  )
}

export default Home