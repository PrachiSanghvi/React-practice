import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <div className="mt-3">
        <NavLink to="/service" className="btn-get-started">Get started</NavLink>
      </div>
    </div>
  )
}

export default HomePage