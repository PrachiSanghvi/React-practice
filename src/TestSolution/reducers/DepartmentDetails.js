
const initialState = {
  departmentData: [
    { name: "HR", value: "HR" },
    { name: "Manager", value: "Manager" },
    { name: "Employee", value: "Employee" },
  ]
}

export const DepartmentList = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
