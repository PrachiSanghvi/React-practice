import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../schemas";
import { addEmployeeData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
// https://mui.com/system/spacing/#api
// https://mui.com/material-ui/react-grid/

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DepartmentList = useSelector(state => state.DepartmentList.departmentData)
  const empData = useSelector(state => state.FetchEmployeeDetail.list)

  const initialValues = {
    eId: 0,
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
      dispatch(addEmployeeData(values))
      navigate('/empList')
      resetForm();
    }
  });

  return (
    <div>
      <div className="container">
        <Typography sx={{ pt: 4 }} align="center" variant="h4">Employee Signup form</Typography>

        <form onSubmit={handleSubmit}>
          <Grid sx={{ p: 4 }} container alignItems="center" justify="center" direction="column"
          >
            <TextField
              name="firstName"
              type="text"
              label="First name"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.firstName}
              error={errors?.firstName}
            />
            {errors?.firstName && touched?.firstName && (
              <p style={{ color: "red" }}> {errors?.firstName}</p>
            )}
            <TextField
              name="lastName"
              type="text"
              label="Last name"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.lastName}
              error={errors?.lastName}
            />
            {errors?.lastName && touched?.lastName && (
              <p style={{ color: "red" }}> {errors?.lastName}</p>
            )}
            <TextField
              name="dob"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              variant='outlined'
              color='secondary'
              // margin bottom
              sx={{ mb: 1 }}
              value={values.dob}
              error={errors?.dob}
              style = {{width: 250}}
            />
            {errors?.dob && touched?.dob && (
              <p style={{ color: "red" }}> {errors?.dob}</p>
            )}
            <TextField
              name="salary"
              type="text"
              label="Salary"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.salary}
              error={errors?.salary}
            />
            {errors?.salary && touched?.salary && (
              <p style={{ color: "red" }}> {errors?.salary}</p>
            )}
            <Select
              value={values.department}
              name="department"
              onChange={handleChange}
              error={errors?.department}
              style = {{width: 250}}
            >
              <MenuItem value="">
                <em>Choose a Department</em>
              </MenuItem>
              {DepartmentList.length > 0
                ? DepartmentList.map((model, index) => (
                  <MenuItem key={index} value={model.value} name={model.name}>{model.name}</MenuItem>
                ))
                : null
              }
            </Select>
            {errors?.department && touched?.department && (
              <p style={{ color: "red" }}> {errors?.department}</p>
            )}
            <Button style = {{width: 250}} sx={{ mt: 4 }} type="submit" variant="outlined" color="secondary">
              submit
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
