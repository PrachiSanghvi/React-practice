import React from 'react';
import { useContext } from 'react';
import { darkModeContext } from '../useContext';

const DarkMode = () => {
  const theme = useContext(darkModeContext);
  const darkMode = theme.state.darkMode;
  const setColorMode = () => {
    if(darkMode){
      theme.dispatch({type:"lightmode"})
    } else {
      theme.dispatch({type:"darkmode"})
    }
  }
  return (
    <>
      <ul>
        <li>
          <div className={`dark-mode-wrapper btn ${darkMode ? "btn-dark" : "btn-light"}`}>
          <button className="dark-mode=btn" onClick={() => setColorMode()}>Dark mode</button>
        </div>
      </li>
    </ul>
    </>
  )
}

export default DarkMode