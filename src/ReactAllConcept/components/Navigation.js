import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search';
import DarkMode from './DarkMode';
import LoginBtn from './LoginBtn';
import { isLogin } from './loginCredential';
// Add context api-dark mode,
const Navigation = () => {
  const [isLogedin, setIsLogedin] = useState(isLogin());

  return (
    <div>
      <header>
        <a href="/">Logo</a>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            {isLogedin && <li><NavLink to="/User">User</NavLink></li>}
            {isLogedin && <Search/>}       
            <DarkMode/>
            <LoginBtn/>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation