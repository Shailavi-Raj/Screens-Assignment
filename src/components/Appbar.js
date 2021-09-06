import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IoBandageSharp } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
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
  const handleClick = () => history.push("/");

  return (
    <div className="appbar">
      <div className={classes.root}>
        <AppBar
          position="sticky"
          style={{ backgroundColor: "#15b2b8", color: "white" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h4" className={classes.title}>
              <Link
                to="/home"
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
            <Button color="inherit" onClick={handleClick}>
              <h5> LOGOUT</h5> <ExitToAppIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Appbar;
