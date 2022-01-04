import React from "react";
import { useHistory } from "react-router-dom";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Button from "@material-ui/core/Button";

function Profile() {
  const history = useHistory();
  const handleClick = () => history.push("/book");
  return (
    <div className="profile">
      <Appbar />
      <Sidebar />
      <h2>Profile Page</h2>
      <div className="sign-in-button">
        <h1>Acccount Details</h1>
        <br />
        <h3>
          Name : <br /> Registered Number :
        </h3>
        <h3>
          Beneficiaries
          <br />
          1. <br />
          2. <br />
          3. <br />
        </h3>
        <Button
          variant="contained"
          className="btn-primary"
          color="basic"
          onClick={handleClick}
        >
          Book Vaccine
        </Button>
      </div>
    </div>
  );
}

export default Profile;
