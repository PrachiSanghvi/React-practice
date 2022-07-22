import React from 'react'
import './Header.css'
const Header = ({ handleToogleDartMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="toggle-button" onClick={() => handleToogleDartMode(
        (previousDarkMode) => !previousDarkMode
        )}>Toggle mode</button>
    </div>
  )
}

export default Header