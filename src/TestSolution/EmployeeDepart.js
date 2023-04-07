import React from 'react'
import CreateEmployee from './components/CreateEmployee'
import ShowEmployeeList from './components/ShowEmployeeList'
import EditEmployee from './components/EditEmployee'
import { Routes, Route } from 'react-router-dom';
const EmployeeDepart = () => {
  return (
    <div>
      <Routes>
        <Route path="/creatEmp" element={<CreateEmployee />} />
        <Route path="/empList" element={<ShowEmployeeList />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
      </Routes>

    </div>
  )
}

export default EmployeeDepart