import React, { useState } from 'react'
import { isLogin } from './loginCredential';
import { Navigate } from 'react-router';
import { Outlet } from 'react-router';

const PrivateRoute = () => {
  const [isLogedin,setIsLogedin] = useState(isLogin());
  if (!isLogedin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet/>;
}

export default PrivateRoute