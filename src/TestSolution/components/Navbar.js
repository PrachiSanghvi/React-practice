import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const  Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Creative Craft
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/createEmp" className={classes.link}>
              Add Employee
            </Link>
            <Link to="/empList" className={classes.link}>
              Employee List
            </Link>
            <Link to="/createDepart" className={classes.link}>
              Add Department
            </Link>
            <Link to="/departmentList" className={classes.link}>
              Department List
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;