import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from '@mui/material';
import Paper from "@material-ui/core/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDepartmentData } from '../actions';
import './style.css'

// https://www.copycat.dev/blog/material-ui-table/

const ShowDepartmentList = () => {
  const DepartmentList = useSelector(state => state.DepartmentList.departmentData)
  const dispatch = useDispatch();

  const deleteDepartment = (id) => {
    dispatch(deleteDepartmentData(id))
  }
  return (
    <div className="show-employee-list">
      <Typography sx={{ pt: 4 }} align="center" variant="h4">Department List</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Department name</TableCell>
              <TableCell align="right">Department Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {DepartmentList.map((row, i) => (
              <TableRow key={row.dId}>
                <TableCell component="th" scope="row"> {row.departmentName}</TableCell>
                <TableCell align="right">{row.departmentDetail}</TableCell>
                <TableCell align="right"><DeleteIcon onClick={() => deleteDepartment(row.dId)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default ShowDepartmentList