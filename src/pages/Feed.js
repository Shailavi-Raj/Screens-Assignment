import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row, Button, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

function Feed() {
  const [userData, setUserData] = useState({
    experience: "",
    userFriendly: "",
    postVaccination: "",
    functionality: "",
    recommendation: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const {
      experience,
      userFriendly,
      postVaccination,
      functionality,
      recommendation,
    } = userData;
    const res = await fetch(
      "https://vaccine-27ca9-default-rtdb.asia-southeast1.firebasedatabase.app/feedBack.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          experience,
          userFriendly,
          postVaccination,
          functionality,
          recommendation,
        }),
      }
    );
    if (res) {
      setUserData({
        experience: "",
        userFriendly: "",
        postVaccination: "",
        functionality: "",
        recommendation: "",
      });
      alert("Data Stored");
    } else {
      alert("please fill the data");
    }
  };

  return (
    <div className="feedback">
      <Appbar />
      <Sidebar />
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Feedback form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="POST">
            <Form.Group as={Row} className="mb-1">
              <Form.Label as="legend" column xs="auto" required="true">
                How wsa your experience at the center?
              </Form.Label>
              <Col xs="auto">
                <FormControl
                  as="select"
                  name="experience"
                  value={userData.experience}
                  onChange={postUserData}
                  required
                >
                  <option>Open this select menu </option>
                  <option value="Satisfactory">Satisfactory</option>
                  <option value="Good">Good</option>
                  <option value="Bad">Bad</option>
                </FormControl>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-1">
              <Form.Label as="legend" column xs="auto">
                How user-friendly is our website ?
              </Form.Label>
              <Col xs="auto">
                <Form.Control
                  as="select"
                  name="userFriendly"
                  value={userData.userFriendly}
                  onChange={postUserData}
                >
                  <option>Open this select menu</option>
                  <option value="Satisfactory">Satisfactory</option>
                  <option value="Good">Good</option>
                  <option value="Bad">Bad</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-2">
              <Form.Label as="legend" column xs="auto">
                Any Post Vaccination Symptoms ?
              </Form.Label>
              <Col xs="auto">
                <Form.Control
                  as="select"
                  required
                  name="postVaccination"
                  value={userData.postVaccination}
                  onChange={postUserData}
                >
                  <option>Open this select menu</option>
                  <option value="Mild">Mild</option>
                  <option value="Severe">Severe</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-2">
              <Form.Label as="legend" column xs="auto">
                Is this website able to fullfill the functionality you want ?
              </Form.Label>
              <Col sm="auto">
                <Form.Control
                  as="select"
                  required
                  name="functionality"
                  value={userData.functionality}
                  onChange={postUserData}
                >
                  <option>Open this select menu</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2"
              controlId="formHorizontalCenter"
            >
              <Form.Label column xs="auto">
                Any Recommendation needed ?
              </Form.Label>
              <Col xs="auto">
                <Form.Control
                  type="center"
                  placeholder="mention  here"
                  name="recommendation"
                  value={userData.recommendation}
                  onChange={postUserData}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={submitData}>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Feed;
