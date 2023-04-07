import React from 'react'
import { useSelector } from 'react-redux'
import CreateEmployee from './components/CreateEmployee'
import ShowEmployeeList from './components/ShowEmployeeList'
const EmployeeDepart = () => {
  const empData = useSelector(state => state.FetchEmployeeDetail.list)
  return (
    <div><CreateEmployee />
      {empData.length > 0 && <ShowEmployeeList />}
    </div>
  )
}

export default EmployeeDepart