import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Col } from "react-bootstrap";
import Adminbar from "../Adminbar";

const Addvaccine = () => {
  const history = useHistory();
  const handleClick = () => history.push("/centers");

  const [userData, setUserData] = useState({
    cname: " ",
    ageGroup: " ",
    pincode: " ",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { cname, ageGroup, pincode } = userData;
    const res = await fetch(
      "https://evaccine-fb8ed-default-rtdb.asia-southeast1.firebasedatabase.app/addCenter.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cname,
          ageGroup,
          pincode,
        }),
      }
    );
    if (res) {
      setUserData({
        cname: "",
        ageGroup: "",
        pincode: " ",
      });
      alert("Data Stored");
    } else {
      alert("please fill the data");
    }
  };

  return (
    <div className="addcenter">
      <Adminbar />
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            <b>Vaccination Center</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="POST">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm={2}>
                Vaccine
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="mention vaccine center name here"
                  name="cname"
                  value={userData.cname}
                  onChange={postUserData}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom03"
              aria-required
            >
              <Form.Label as="legend" column sm={2}>
                Age group
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  required
                  name="ageGroup"
                  value={userData.ageGroup}
                  onChange={postUserData}
                >
                  <option>Open this select menu</option>
                  <option value="below 18">Below 18</option>
                  <option value="Above 18">Above 18</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom04"
            >
              <Form.Label column sm={2}>
                Pincode
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Mention the area Pincode of the Center"
                  name="pincode"
                  value={userData.pincode}
                  onChange={postUserData}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleClick}>
            Back
          </Button>
          <Button type="submit" onClick={submitData}>
            Add Vaccine Center
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
export default Addvaccine;
