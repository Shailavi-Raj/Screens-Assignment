import React from "react";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";

function Day() {
  return (
    <div className="days">
      <Adminbar />
      <AdminSide />
      <h2>Schedule of the day</h2>
    </div>
  );
}

export default Day;
