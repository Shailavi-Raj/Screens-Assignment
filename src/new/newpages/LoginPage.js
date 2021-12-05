import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Adminbar from "../Adminbar";
import "../newpages/Login.css";

function Login() {
  const history = useHistory();
  const handleClick = () => history.push("/adminlogin");
  return (
    <div className="loginpage">
      <Adminbar />
      <h2> Admin Login </h2> <br />
      <div className="signin">
        <form>
          <div className="form-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder=" User Name"
            />
            <br />
          </div>
          <div className="form-group-lg">
            <input
              type="password"
              className="form-control"
              placeholder=" PASSWORD"
            />
          </div>
          <br />
          <center>
            {" "}
            <Button
              className="btn-primary"
              variant="contained"
              color="basic"
              onClick={handleClick}
            >
              <h5> SUBMIT </h5>
            </Button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
