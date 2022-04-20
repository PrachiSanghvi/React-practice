import logo from './reactlogo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';


import './Header.css'
function leftLogo() {
  return(
    <div className="left-logo">
      <img src="https://picsum.photos/200" style={{"height":"100px","width":"100px"}} alt="React logo"></img>
    </div>
  )
}
function middleMenu() {
  return(
    <div className="middle-menu">
      {/* <ul className="header-menu">
        <li><a href="www.google.com">Home</a></li>
        <li><a href="www.google.com">About US</a></li>
        <li><a href="www.google.com">Gallery</a></li>
        <li><a href="www.google.com">Contact us</a></li>
      </ul> */}
      <NavLink end to='/about'>About</NavLink>
      <NavLink end to='/contact'>Contact</NavLink>
      <NavLink end to='/search'>Search</NavLink>
    </div>
  )
}
function rightmenu() {
  return(
    <div className="right-menu">Right menu</div>
  )
}
class Header extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}

  render() {
    return (<div className="main-header-wrapper">
      <div className="top-header">
        {leftLogo()} 
        {middleMenu()}
        {rightmenu()} 
      </div>
    </div>);
  }
}

export default Header;