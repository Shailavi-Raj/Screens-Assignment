import React, { useState } from "react";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import Button from "@material-ui/core/Button";
import "../pages/Signup.css";

function Signup() {
  const [nullData, setNullData] = useState(true);
  const [userData, setUserData] = useState({
    fname: " ",
    mobile: " ",
    adharno: " ",
  });
  let name, value;
  const PostUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    if (!value) {
      setNullData(true);
    }
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { fname, mobile, adharno } = userData;
    if (!nullData) {
      alert("Please Fill The Data");
    } else {
      await fetch(
        "https://evaccine-fb8ed-default-rtdb.asia-southeast1.firebasedatabase.app/signUp.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            mobile,
            adharno,
          }),
        }
      ).then(() => alert("Dara Stored"));
    }
    // if (res) {
    // setUserData({
    // fname: "",
    //mobile: "",
    //  adharno: " ",
    //});
    //alert("Data Stored");
    //window.location = "/login";
    //} else {
    //alert("please fill the data");
    //}
  };

  return (
    <div className="signup">
      <Aboutbar />
      <AboutSide />
      <h2>Signup</h2>
      <br />
      <div classname="signin">
        <form>
          <div className="form-group-lg">
            <label>Your Name</label>
            <input
              type="text"
              name="fname"
              required
              className="form-control"
              placeholder="First Name"
              value={userData.fname}
              onChange={PostUserData}
            />
            <br />
          </div>
          <div className="form-group-lg">
            <label> Your Mobile Number</label>
            <input
              type="number"
              name="mobile"
              required
              className="form-control"
              placeholder="Mobile Number"
              value={userData.mobile}
              onChange={PostUserData}
            />
          </div>
          <br />
          <div className="form-group-lg">
            <label> Your Adhar Number</label>
            <input
              type="number"
              name="adharno"
              required
              className="form-control"
              placeholder="Adhar Number"
              value={userData.adharno}
              onChange={PostUserData}
            />
          </div>
          <br /> <br />
          <Button
            variant="contained"
            className="btn-primary"
            color="basic"
            onClick={submitData}
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
