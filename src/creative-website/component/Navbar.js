import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import { UserContext } from '../app/userContext';
const  Navbar = () => {
  const theme = useContext(UserContext)
  const darkMode = theme.state.darkMode;
  const setColorMode = () => {
    if (darkMode) {
      theme.dispatch({type : "lightmode"})
    } else {
      theme.dispatch({type : "darkmode"})
    }
  }
  return (
      <div className={`${darkMode ? 'bg-dark' : 'bg-light'} navbar-wrapper`}>
        <div className="logo-wrapper">
          <img src={logo} style={{height:100,width:100,padding: 10}} alt="Website Logo" />
        </div>
        <div className="navigation-wrapper">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/Quiz" className="nav-link">Quiz</Link></li>
            <li className="nav-item"><Link to="/About" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="/Contact" className="nav-link">Contact Us</Link></li>
          </ul>
        </div>
        <div className={`dark-mode-wrapper btn ${darkMode ? "btn-dark" : "btn-light"}`}>
          <button className="dark-mode-btn" onClick={() => setColorMode()}>Dark mode</button>
        </div>
      </div>
  )
}

export default Navbar