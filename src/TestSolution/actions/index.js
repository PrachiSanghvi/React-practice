export const ADD_EMPLOYEE_DATA = 'ADD_EMPLOYEE_DATA';
export const EDIT_EMPLOYEE_DATA = 'EDIT_EMPLOYEE_DATA';
export const DELETE_EMPLOYEE_DATA = 'DELETE_EMPLOYEE_DATA'

export const addEmployeeData = (payload) => ({
  type: ADD_EMPLOYEE_DATA, payload
})

export const editEmployeeData = (payload) => ({
  type: EDIT_EMPLOYEE_DATA, payload
})

export const deleteEmployeeData = (payload) => ({
  type: DELETE_EMPLOYEE_DATA, payload
})