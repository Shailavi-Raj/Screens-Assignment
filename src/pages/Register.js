import React, { useState } from "react";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Button from "@material-ui/core/Button";

function Register() {
  const [nullData, setNullData] = useState(true);
  const [userData, setUserData] = useState({
    fname: " ",
    add: " ",
    state: " ",
    email: " ",
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
    const { fname, add, state, email } = userData;
    if (!nullData) {
      alert("Please Fill The Data");
    } else {
      await fetch(
        "https://vaccine-27ca9-default-rtdb.asia-southeast1.firebasedatabase.app/register.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            add,
            state,
            email,
          }),
        }
      ).then(() => alert("Dara Stored"));
    }
  };
  return (
    <div className="register">
      <Appbar />
      <Sidebar />
      <h2>Register New User</h2>
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
          <label> Address</label>
          <input
            type="text"
            name="add"
            required
            className="form-control"
            placeholder="Address"
            value={userData.add}
            onChange={PostUserData}
          />
        </div>
        <br />
        <div className="form-group-lg">
          <label> State</label>
          <input
            type="text"
            name="state"
            required
            className="form-control"
            placeholder="State"
            value={userData.state}
            onChange={PostUserData}
          />
        </div>
        <br />
        <div className="form-group-lg">
          <label> Email</label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            placeholder="Email"
            value={userData.email}
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
  );
}

export default Register;
