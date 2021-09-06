import React from "react";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";

function Vaccine() {
  return (
    <div className="vaccine">
      <Adminbar />
      <AdminSide />
      <h2>Available vaccine will be shown here.</h2>
    </div>
  );
}

export default Vaccine;
