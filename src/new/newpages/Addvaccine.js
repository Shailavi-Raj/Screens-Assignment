import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Col } from "react-bootstrap";
import Adminbar from "../Adminbar";

const Addvaccine = () => {
  const history = useHistory();
  const handleClick = () => history.push("/vaccine");
  const [nullData, setNullData] = useState(true);
  const [userData, setUserData] = useState({
    vaccine: "",
    nextDose: "",
    ageGroup: "",
    availablity: " ",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    if (!value) {
      setNullData(true);
    }
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { vaccine, nextDose, ageGroup, availablity } = userData;
    if (!nullData) {
      alert("Please Fill The Data");
    } else {
      await fetch(
        "https://vaccine-27ca9-default-rtdb.asia-southeast1.firebasedatabase.app/addVaccine.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vaccine,
            nextDose,
            ageGroup,
            availablity,
          }),
        }
      ).then(() => alert("Data Stored"));
    }

    // if (res) {
    //   setUserData({
    //     vaccine: "",
    //     nextDose: "",
    //     ageGroup: "",
    //     availablity: " ",
    //   });
    //   alert("Data Stored");
    // } else {
    //   alert("please fill the data");
    // }
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="addvaccine">
      <Adminbar />
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Vaccine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            method="POST"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
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
                  required
                  type="text"
                  placeholder="mention vaccine name here"
                  name="vaccine"
                  value={userData.vaccine}
                  onChange={postUserData}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom02"
            >
              <Form.Label column sm={3}>
                Next dose duration
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="mention duration  here"
                  name="nextDose"
                  value={userData.nextDose}
                  onChange={postUserData}
                />
              </Col>
            </Form.Group>
            <fieldset>
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
            </fieldset>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom04"
            >
              <Form.Label column sm={2}>
                Availablity
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  required
                  name="availablity"
                  value={userData.availablity}
                  onChange={postUserData}
                >
                  <option>Open this select menu</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleClick}>
            Back
          </Button>
          <Button type="submit" onClick={submitData}>
            Add Vaccine
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
export default Addvaccine;
