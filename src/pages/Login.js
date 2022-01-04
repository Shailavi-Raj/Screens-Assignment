import React from "react";
import firebase from "../firebase";
import "firebase/auth";
//import { auth, RecaptchaVerifier } from "firebase/auth";
//import { useHistory } from "react-router-dom";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");
      });
  };
  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        alert("User signed in successfully.");
        window.location("/home");
        const user = result.user;
        console.log(JSON.stringify(user));
        //
        // Navigation();
        //window.location("localhost:3000/home");
        //("User is verified");

        // ...
      })
      .catch((error) => {
        alert("User couldn't sign in (bad verification code?)");
        // ...
      });
  };
  render() {
    return (
      <div className="login">
        <Aboutbar />
        <AboutSide />
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile number"
            required
            onChange={this.handleChange}
          />
          <br />
          <Button
            variant="contained"
            className="btn-primary"
            color="basic"
            type="submit"
          >
            Submit
          </Button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input
            type="number"
            name="otp"
            placeholder="OTP Number"
            required
            onChange={this.handleChange}
          />
          <br />
          <Button
            variant="contained"
            className="btn-primary"
            color="basic"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default App;
