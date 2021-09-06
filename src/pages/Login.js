import React from "react";
import { useHistory } from "react-router-dom";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import Button from "@material-ui/core/Button";
import "../pages/Signup.css";

function Login() {
  const history = useHistory();
  const handleClick = () => history.push("/home");
  return (
    <div className="login">
      <Aboutbar />
      <AboutSide />
      <h2> Login </h2> <br />
      <div className="signin">
        <form>
          <div className="form-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder=" Mobile no."
            />
            <br />
          </div>
          <div className="form-group-lg">
            <input type="text" className="form-control" placeholder=" OTP" />
          </div>
          <br />
          <Button
            className="btn-primary"
            variant="contained"
            color="basic"
            onClick={handleClick}
          >
            <h5> SUBMIT </h5>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
