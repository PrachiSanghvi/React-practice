import React, { useState } from 'react'
import { login, logout, isLogin } from './loginCredential';
const LoginBtn = () => {
  const [isLogedin, setIsLogedin] = useState(isLogin());

  const handleLogout = () => {
    logout();
    setIsLogedin(false);
  }
  const handleLogin = () => {
    login();
    setIsLogedin(true);
  }
  return (
    <>
      {isLogedin ? <button onClick={() => handleLogout()}>LogOut</button> : <button onClick={() => handleLogin()}>Login</button>}
    </>
  )
}

export default LoginBtn