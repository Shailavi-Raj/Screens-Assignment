import React from "react";

import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="profile">
      <Appbar />
      <Sidebar />
      <h2>Profile Page</h2>
    </div>
  );
}

export default Profile;
