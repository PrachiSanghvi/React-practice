import React from 'react'
import { useSelector } from "react-redux";
import './style.css'
const ShowEmployeeList = () => {
  const empData = useSelector(state => state.FetchEmployeeDetail.list)

  const editEmployee = () => {
    debugger;
  }

  const deleteEmployee = () => {
    debugger
  }

  return (
    <div className="show-employee-list">
      <h1 className="employee-list-title">Employee List</h1>
      <input type="text" placeholder="search here..." />
      {empData.map((emp,i) => {
        return (
          <div className="list-wrapper" key={i}>
            <span className="list-data">{emp.firstName}</span>
            <span className="list-data">{emp.lastName}</span>
            <span className="list-data">{emp.dob}</span>
            <span className="list-data">{emp.salary}</span>
            <span className="list-data">{emp.department}</span>
            <button onClick={() => editEmployee()}>EDIT</button>
            <button onClick={() => deleteEmployee()}>DELETE</button>
          </div>
        )
      })}

    </div>
  )
}

export default ShowEmployeeList