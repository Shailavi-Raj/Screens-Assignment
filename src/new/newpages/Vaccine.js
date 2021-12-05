import React from "react";
import Adminbar from "../Adminbar";
import AdminSide from "../AdminSide";
import { useHistory } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import ctr from "../newpages/hospital.jpg";
import usr from "../newpages/user.jpg";
import vac from "../newpages/injection.jpg";

function Vaccine() {
  const history = useHistory();
  const handleClick = () => history.push("/addvaccine");
  return (
    <div className="vaccine">
      <Adminbar />
      <AdminSide />
      <div className="container">
        <Row className="row card-wrapper">
          <Col md-2>
            <div className="card-container">
              <div className="image-conatiner">
                <img src={vac} alt="vaccine" />
              </div>
              <div className="card-title">
                <h1>Add</h1>
              </div>
              <div className="card-body">
                <p></p>
              </div>
              <div className="btn">
                <Button variant="primary" size="lg" onClick={handleClick}>
                  Click to Add Vaccine
                </Button>
              </div>
            </div>
          </Col>
          <Col md-2>
            <div className="card-container">
              <div className="image-conatiner">
                <img src={ctr} alt="center" />
              </div>
              <div className="card-title">
                <h1>Update</h1>
              </div>
              <div className="card-body">
                <p></p>
              </div>
              <div className="btn">
                <Button variant="primary" size="lg">
                  Click to Update Vaccine{" "}
                </Button>
              </div>
            </div>
          </Col>
          <Col md-2>
            <div className="card-container">
              <div className="image-conatiner">
                <img src={usr} alt="user" />
              </div>
              <div className="card-title">
                <h1>Delete</h1>
              </div>
              <div className="card-body">
                <p></p>
              </div>
              <div className="btn">
                <Button variant="primary" size="lg">
                  Click to view Vaccine{" "}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Vaccine;
