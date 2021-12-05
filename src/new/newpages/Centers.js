import React from "react";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";
import { Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ctr from "../newpages/hospital.jpg";

function Centers() {
  const history = useHistory();
  const handleClick = () => history.push("/addcenter");
  return (
    <div className="centers">
      <Adminbar />
      <AdminSide />
      <div className="container">
        <Row className="row card-wrapper">
          <Col md-2>
            <div className="card-container">
              <div className="image-conatiner">
                <img src={ctr} alt="vaccine" />
              </div>
              <div className="card-title">
                <h1>Add</h1>
              </div>
              <div className="card-body">
                <p></p>
              </div>
              <div className="btn">
                <Button variant="primary" size="lg" onClick={handleClick}>
                  Click to Add Vaccine center
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Centers;
