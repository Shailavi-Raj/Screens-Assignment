import React from "react";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";
import Kard from "./Kard";
import "../newpages/Kard.css";

function Reports() {
  return (
    <div className="report">
      <Adminbar />
      <AdminSide />
      <Kard />
    </div>
  );
}

export default Reports;
