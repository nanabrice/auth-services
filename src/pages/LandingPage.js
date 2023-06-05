import Navbar from "../components/Navigationbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Image from 'react-bootstrap/Image';

import img from "../images/img5.png"

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Container className="">
        <Container className="d-flex flex-column align-items-center justify-content-center p-4 mt-6">
          <Row>
            <Col>
              <h1 className="mb-5">
                Have your tasks, team and tools together at one place
              </h1>
              <div
                style={{
                  borderBottom: "1px solid #000",
                  marginBottom: "2rem",
                  width: "80px",
                }}
              ></div>
              <p className="fs-5 w-1 mb-4">
                Enhance your productivity throughout the achievement? TaskAID
                offers versatility and simplicity for your team, enabling you to
                collaboratively achieve exceptional results with increased
                speed.
              </p>
              <Link to="/Register" className="strip">
                <Button variant="dark mt-3" className="form-control gs">
                  Get Started
                </Button>
              </Link>
            </Col>
            <Col className="m-4">
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src={img} rounded />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default LandingPage;
