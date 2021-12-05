import React, { Component } from "react";
//import { useHistory } from "react-router-dom";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import Button from "@material-ui/core/Button";
import "../pages/Signup.css";
//import { Link } from "react-router-dom";
//import firebase from  "../firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

export default class Login extends Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //const history = useHistory();
  //const handleClick = () => history.push("/home");
  setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca Vrtified");
      },
      defaultCountry: "IN",
    });
  };
  onSignInSubmit = (e) => {
    e.prevebtDefault();
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("Otp has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("Sms not sent");
      });
  };

  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("user is verified");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  render() {
    return (
      <div className="login">
        <Aboutbar />
        <AboutSide />
        <h2> Login Form</h2> <br />
        <h2>Mobile No</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div className="form-group-lg">
            <input
              name="mobile"
              type="number"
              className="form-control"
              placeholder=" Mobile no."
              required
              onChange={this.handleChange}
            />
            <br />

            <Button className="btn-primary" variant="contained" color="basic">
              <h5> SUBMIT </h5>
            </Button>

            <br />
            <br />
          </div>
        </form>
        <form onSubmit={this.onSubmitOTP}>
          <div>
            <h2>Enter OTP</h2>
            <div className="form-group-lg">
              <input
                name=" otp"
                type="number"
                className="form-control"
                placeholder=" OTP"
                required
                onchange={this.handleChange}
              />
            </div>
            <br />
            <Button
              className="btn-primary"
              variant="contained"
              color="basic"
              //onClick={handleClick}
            >
              <h5> SUBMIT </h5>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

//export default Login;
