import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';
import './style.css'
import { deleteEmployeeData } from '../actions';
import { TextField, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';

// https://www.copycat.dev/blog/material-ui-table/

const ShowEmployeeList = () => {
  const empData = useSelector(state => state.FetchEmployeeDetail.list)

  const navigate = useNavigate();
  const editEmployee = (id) => {
    navigate(`/editEmployee/${id}`)
  }
  const dispatch = useDispatch();

  const deleteEmployee = (id) => {
    dispatch(deleteEmployeeData(id))
  }

  const [searchResult, setSearchResult] = useState();

  return (
    <div className="show-employee-list">
      <h1 className="employee-list-title">Employee List</h1>
      <TextField
        id="standard-bare"
        variant="outlined"
        label="Search here.."
        onChange={(e) => setSearchResult(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="right">Last name</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {empData.filter((val) => {
              if (searchResult === '') { return val; }
              else if (val.firstName.toLowerCase().includes(searchResult?.toLowerCase())) {
                return val
              }
            }).map((row, i) => (
              <TableRow key={row.eId}>
                <TableCell component="th" scope="row"> {row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right"><DeleteIcon onClick={() => deleteEmployee(row.eId)} /></TableCell>
                <TableCell align="right"><EditIcon onClick={() => editEmployee(row.eId)} /></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default ShowEmployeeList