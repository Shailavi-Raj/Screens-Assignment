import React from "react";
import Adminbar from "./Adminbar";
import AdminSide from "./AdminSide";
import "../components/MenuOption.css";

function Login() {
  return (
    <div className="adminlogin">
      <Adminbar />
      <AdminSide />
      <h2>After login page</h2>
    </div>
  );
}

export default Login;
