import React from "react";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";

function Dashboard() {
  return (
    <div className="dashboard">
      <Aboutbar />
      <AboutSide />
      <h2>Dashboard Page</h2>
    </div>
  );
}

export default Dashboard;
