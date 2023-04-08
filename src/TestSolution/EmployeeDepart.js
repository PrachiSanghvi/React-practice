import React from 'react'
import CreateEmployee from './components/CreateEmployee'
import ShowEmployeeList from './components/ShowEmployeeList'
import EditEmployee from './components/EditEmployee'
import CreateDepartment from './components/CreateDepartment'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ShowDepartmentList from './components/ShowDepartmentList'
const EmployeeDepart = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createEmp" element={<CreateEmployee />} />
        <Route path="/empList" element={<ShowEmployeeList />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path="/createDepart" element={<CreateDepartment />} />
        <Route path="/departmentList" element={<ShowDepartmentList />} />
      </Routes>

    </div>
  )
}

export default EmployeeDepart