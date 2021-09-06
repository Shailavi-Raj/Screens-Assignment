import React from "react";
// import "../newpages/Kard.css";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import ctr from "../newpages/hospital.jpg";
import usr from "../newpages/user.jpg";
import vac from "../newpages/injection.jpg";

function kard() {
  return (
    <div className="container">
      <Row className="row card-wrapper">
        <Col md-2>
          <div className="card-container">
            <div className="image-conatiner">
              <img src={usr} alt="user" />
            </div>
            <div className="card-title">
              <h1>User</h1>
            </div>
            <div className="card-body">
              <p></p>
            </div>
            <div className="btn">
              <Link to="/report" activeStyle>
                {" "}
                {/*Link to the table page */}
                <Button variant="primary" size="lg">
                  Click to view report{" "}
                </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col md-2>
          <div className="card-container">
            <div className="image-conatiner">
              <img src={vac} alt="vaccine" />
            </div>
            <div className="card-title">
              <h1>Vaccine</h1>
            </div>
            <div className="card-body">
              <p></p>
            </div>
            <div className="btn">
              <Link to="/report" activeStyle>
                <Button variant="primary" size="lg">
                  Click to view report{" "}
                </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col md-2>
          <div className="card-container">
            <div className="image-conatiner">
              <img src={ctr} alt="center" />
            </div>
            <div className="card-title">
              <h1>Center</h1>
            </div>
            <div className="card-body">
              <p></p>
            </div>
            <div className="btn">
              <Link to="/report" activeStyle>
                <Button variant="primary" size="lg">
                  Click to view report{" "}
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default kard;
