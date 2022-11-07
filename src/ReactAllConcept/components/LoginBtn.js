import React from 'react'
import { login, logout } from './loginCredential';
import { useDispatch, useSelector } from 'react-redux';
import { UserLoggedIn } from '../actions';
const LoginBtn = () => {
  const isLoginUser = useSelector(state => state.checkForLoggedInUser.UserLoggedin);
  const dispatch  = useDispatch()
  const handleLogout = () => {
    logout();
    dispatch(UserLoggedIn(false))
  }
  const handleLogin = () => {
    login();
    dispatch(UserLoggedIn(true))
  }
  return (
    <>
      {isLoginUser ? <button onClick={() => handleLogout()}>LogOut</button> : <button onClick={() => handleLogin()}>Login</button>}
    </>
  )
}

export default LoginBtn