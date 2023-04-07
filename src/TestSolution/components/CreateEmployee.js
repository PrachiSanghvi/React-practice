import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../schemas";
import { addEmployeeData } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const DepartmentList = useSelector(state => state.DepartmentList.departmentData)
  const empData = useSelector(state => state.FetchEmployeeDetail.list)

  const initialValues = {
    eId : 0,
    firstName: "",
    lastName: "",
    dob: "",
    salary: "",
    department: ""
  };
  
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    handleSubmit
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      values.eId = empData.length + 1
      console.log("values", values);
      alert("sign in successfully");
      dispatch(addEmployeeData(values))
      resetForm();
    }
  });

  console.log("empData", empData, "values", values);
  return (
    <div>
      <div className="container">
        <h1>Employee Signup form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>firstName</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors?.firstName && touched?.firstName && (
              <p style={{ color: "red" }}> {errors?.firstName}</p>
            )}
          </div>
          <div className="form-group">
            <label>lastName</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors?.lastName && touched?.lastName && (
              <p style={{ color: "red" }}> {errors?.lastName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Date of birth</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
            />
            {errors?.dob && touched?.dob && (
              <p style={{ color: "red" }}> {errors?.dob}</p>
            )}
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              name="salary"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.salary}
            />
            {errors?.salary && touched?.salary && (
              <p style={{ color: "red" }}> {errors?.salary}</p>
            )}
          </div>
          <div className="form-group">
            <label>Department</label>

            <select onChange={handleChange} value={values.department} name="department">
              {DepartmentList.length > 0
                && DepartmentList.map((item, i) => {
                  return (
                    <option key={item.value+i} value={item.value} name={item.name}>{item.name}</option>
                  )
                })}
            </select>
            {errors?.department && touched?.department && (
              <p style={{ color: "red" }}> {errors?.department}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary mx-1">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
