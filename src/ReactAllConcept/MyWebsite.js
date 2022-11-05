import React from 'react';
import UserData from './components/UserData';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import User from './Pages/User';
import PrivateRoute from './components/PrivateRoute';
import './style.css';
const MyWebsite = () => {
  return (
    <div>
      <Routes>
        {/* Nested Routing */}
        <Route path="/" element={<Home />}>
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />

          <Route element={<PrivateRoute />}>
            <Route path='User' element={<User />} >
              {/* react router- link ,dynamic routing */}
              <Route path=":name" element={<User />} />
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
          {/* Index Route */}

          <Route element={<PrivateRoute />}>
            <Route index element={<UserData />} >
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default MyWebsite