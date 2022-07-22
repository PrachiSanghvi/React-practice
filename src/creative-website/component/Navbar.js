import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
const Navbar = () => {
  const [darkMode,setDarkMode] = useState(false);
  return (
      <div className={`${darkMode && 'darkmode'} navbar-wrapper`}>
        <div className="logo-wrapper">
          <img src={logo} style={{"height":"100px","width":"100px","padding": "10px"}} alt="Website Logo" />
        </div>
        <div className="navigation-wrapper">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/Quiz" className="nav-link">Quiz</Link></li>
            <li className="nav-item"><Link to="/About" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="/Contact" className="nav-link">Contact Us</Link></li>
          </ul>
        </div>
        <div className="dark-mode-wrapper">
          <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>Dark mode</button>
        </div>
      </div>
  )
}

export default Navbar