import React from "react";

import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="home">
      <Appbar />
      <Sidebar />
      <h2>Home Page</h2>
    </div>
  );
}

export default Home;
