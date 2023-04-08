import React from "react";
import { useFormik } from "formik";
import { departmentFormSchema } from "../schemas";
import { addDepartmentData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
// https://mui.com/system/spacing/#api
// https://mui.com/material-ui/react-grid/

const CreateDepartment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DepartmentList = useSelector(state => state.DepartmentList.departmentData)

  const initialValues = {
    dId : 0,
    departmentName: "",
    departmentDetail: ""
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: initialValues,
    validationSchema: departmentFormSchema,
    onSubmit: (values) => {
      values.dId = DepartmentList.length + 1;
      dispatch(addDepartmentData(values))
      navigate('/departmentList')
    }
  });

  return (
    <div>
      <div className="container">
        <Typography sx={{ pt: 4 }} align="center" variant="h4">Create Department</Typography>

        <form onSubmit={handleSubmit}>
          <Grid sx={{ p: 4 }} container alignItems="center" justify="center" direction="column"
          >
            <TextField
              name="departmentName"
              type="text"
              label="Department Name"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.departmentName}
              error={errors?.departmentName}
            />
            {errors?.departmentName && touched?.departmentName && (
              <p style={{ color: "red" }}> {errors?.departmentName}</p>
            )}
            <TextField
              name="departmentDetail"
              type="text"
              label="Department Detail"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.departmentDetail}
              error={errors?.departmentDetail}
            />
            {errors?.departmentDetail && touched?.departmentDetail && (
              <p style={{ color: "red" }}> {errors?.departmentDetail}</p>
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

export default CreateDepartment;
