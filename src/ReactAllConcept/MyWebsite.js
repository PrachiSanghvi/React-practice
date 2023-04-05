import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import User from './Pages/User';
import LoginPage from './Pages/LoginPage'
import PrivateRoute from './components/PrivateRoute';
import { isLogin } from './components/loginCredential';
import { useDispatch } from 'react-redux';
import CollectionPage from './Pages/CollectionPage';
import { UserLoggedIn } from './actions';
import './style.css';


const MyWebsite = () => {
  const [loginStatus, setLoginStatus] = useState(isLogin());
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginStatus) {
      dispatch(UserLoggedIn(true))
    } else {
      dispatch(UserLoggedIn(false))
    }
  }, [])
  return (
    <div>
      <Routes>
        {/* Nested Routing */}
        <Route path="/" element={<Home />}>
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Product" element={<ProductPage />} />
          <Route path="Collection" element={<CollectionPage />} />
          <Route path="Cart" element={<Cart />} />
          <Route element={<PrivateRoute />}>
            <Route path='User' element={<User />} >
              {/* react router- link ,dynamic routing */}
              <Route path=":name" element={<User />} />
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
          
          {/* Index Route */}
          <Route element={<PrivateRoute />}>
            <Route index element={<UserData />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default MyWebsite