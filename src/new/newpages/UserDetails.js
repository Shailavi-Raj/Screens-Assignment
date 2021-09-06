import React from "react";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";

function UserDetails() {
  return (
    <div className="userdetails">
      <Adminbar />
      <AdminSide />
      <h2>User details</h2>
    </div>
  );
}

export default UserDetails;
