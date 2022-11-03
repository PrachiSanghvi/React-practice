import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search';
import DarkMode from './DarkMode';
// Add context api-dark mode,
const Navigation = () => {
  return (
    <div>
      <header>
        <a href="/">Logo</a>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/User">User</NavLink></li>
            {/* <li><NavLink to="/User/prachi">Prachi</NavLink></li> */}
            {/* <li><NavLink to="/User/prakruti">Prakruti</NavLink></li> */}
            <Search/>
            <DarkMode/>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation