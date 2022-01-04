import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Col } from "react-bootstrap";
import Appbar from "../components/Appbar";

const Book = () => {
  const history = useHistory();
  const handleClick = () => history.push("/book");
  const [nullData, setNullData] = useState(true);
  const [userData, setUserData] = useState({
    vname: "",
    ageGroup: "",
    cname: "",
    date: " ",
    pincode: " ",
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
    const { vname, ageGroup, cname, date, pincode } = userData;
    if (!nullData) {
      alert("Please Fill The Data");
    } else {
      await fetch(
        "https://evaccine-fb8ed-default-rtdb.asia-southeast1.firebasedatabase.app/bookedVaccine.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vname,
            ageGroup,
            cname,
            date,
            pincode,
          }),
        }
      ).then(() => alert("The Vaccine is booked for you"));
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
    <div className="book">
      <Appbar />
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Book Vaccine</Modal.Title>
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
                Vaccine Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="mention vaccine name here"
                  name="vaccine"
                  value={userData.vname}
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
              controlId="validationCustom02"
            >
              <Form.Label column sm={3}>
                Choose Center
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="choose center for yourself"
                  name="nextDose"
                  value={userData.cname}
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
                Date
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="choose the date for vaccination"
                  name="date"
                  value={userData.date}
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
                Pincode
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  type="text"
                  placeholder="mention duration  here"
                  name="nextDose"
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
            Done
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Book;
