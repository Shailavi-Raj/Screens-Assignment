import React, { useState, useEffect } from "react";
import axios from "axios";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";
import "firebase/database";
//Simport "../Admin.css";

import firebase from "../../firebase";
const db = firebase.database().ref("/signUp");
function UserDetails() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  function delete1(key) {
    console.log("hello", key);
    return db.child(key).remove();
  }
  const loadUsers = async () => {
    const result = await axios.get(
      "https://evaccine-fb8ed-default-rtdb.asia-southeast1.firebasedatabase.app/signUp.json"
    );
    console.log(result, "this is result", typeof result);
    setUser(result.data);
  };
  const deleteUser = async (id) => {
    delete1(id)
      .then(() => {
        console.log("deleted");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(users, "this is user", typeof users);
  const arr = Object.values(users);
  console.log(arr, "this is arrray");
  return (
    <div className="userdetails">
      <Adminbar />
      <AdminSide />
      <h2>User details</h2>
      <center>
        <table class="table table-success table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((userData, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{userData.fname} </td>
                <td>{userData.mobile}</td>
                <td>{userData.adharno}</td>
                <td>
                  <button
                    color="inherit"
                    onClick={() => deleteUser("MpU86hsOs6qHK_4V2MX")}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UserDetails;
