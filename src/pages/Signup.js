import React from "react";
import { useHistory } from "react-router-dom";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import Button from "@material-ui/core/Button";
import "../pages/Signup.css";

function Signup() {
  const history = useHistory();
  const handleClick = () => history.push("/login");
  return (
    <div className="signup">
      <Aboutbar />
      <AboutSide />
      <h2>Signup</h2>
      <br />
      <div className="signin">
        <form>
          <div className="form-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder=" First Name"
            />
            <br />
          </div>
          <div className="form-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder=" Last Name"
            />
          </div>
          <br />
          <div className="form-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <br />
          <div className="form-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Adhar Number"
            />
          </div>
          <br /> <br />
          <Button
            variant="contained"
            className="btn-primary"
            color="basic"
            onClick={handleClick}
          >
            <h5> SUBMIT </h5>
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Signup;
