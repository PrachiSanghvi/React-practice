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

 //on submit data get in this object
 const [searchData,setSearchData] = useState([]);

 //flag for data found or not
 const [flag, setflag]= useState(false);

  const navigate = useNavigate();
  const editEmployee = (id) => {
    navigate(`/editEmployee/${id}`)
  }
  const dispatch = useDispatch();

  const deleteEmployee = (id) => {
    dispatch(deleteEmployeeData(id))
  }

  const handleChange = (e) => {
    if (e.target.value === '') {
      setflag(false);
    } else {
      let temp  = e.target.value;
      let resultData = empData.filter(obj => obj.firstName.toLowerCase().includes(temp.toLowerCase()))
      setSearchData(resultData);
      setflag(true);
    }
  }
  const empList = flag ? searchData : empData;

  return (
    <div className="show-employee-list">
      <h1 className="employee-list-title">Employee List</h1>
      <TextField
        id="standard-bare"
        variant="outlined"
        label="Search here.."
        onChange={handleChange}
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

            {empList.length > 0 ? empList.map((row, i) => (
              <TableRow key={row.eId}>
                <TableCell component="th" scope="row"> {row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right"><DeleteIcon onClick={() => deleteEmployee(row.eId)} /></TableCell>
                <TableCell align="right"><EditIcon onClick={() => editEmployee(row.eId)} /></TableCell>
              </TableRow>
            )) : "No records found" }
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default ShowEmployeeList