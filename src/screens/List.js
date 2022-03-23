import React from "react";
import Sidebar from "../pages/Sidebar";
import pic from "../images/ticket_list.png";
import "../styles/main.css";

const List = () => {
  return (
    <div className="paragraph ">
      <Sidebar />
      <center>
        {" "}
        <img
          style={{ marginLeft: "250px", marginTop: "0" }}
          src={pic}
          alt="user"
        />
      </center>
    </div>
  );
};

export default List;
