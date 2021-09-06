import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { IoBandageSharp } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));
function Appbar() {
  const classes = useStyles();

  const history = useHistory();
  const handleClick = () => history.push("/loginpage");
  const hereClick = () => history.push("/signup");
  const loginClick = () => history.push("/login");

  return (
    <div className="appbar">
      <div className={classes.root}>
        <AppBar
          position="sticky"
          style={{ backgroundColor: "#15b2b8", color: "white" }}
        >
          <Toolbar>
            <Button color="inherit" onClick={handleClick}>
              <AccountBoxIcon />
              <h5> ADMIN LOGIN </h5>
            </Button>
            <Typography variant="h4" className={classes.title}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                <IoBandageSharp /> E-vaccination Management System{" "}
                <IoBandageSharp />
              </Link>
            </Typography>
            <Button color="inherit" onClick={hereClick}>
              <LockOpenIcon /> <h5> Sign Up </h5>
            </Button>

            <Button color="inherit" onClick={loginClick}>
              <AccountCircleIcon /> <h5> LOGIN </h5>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Appbar;
