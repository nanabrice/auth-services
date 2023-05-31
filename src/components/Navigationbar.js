import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/esm/Stack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faPeopleGroup,
  faChartGantt,
  faObjectUngroup,
  faLightbulb,
  faStar,
  faBuilding,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function OffCanvasFeatures({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} className="me-2">
        {name}
      </Nav.Link>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        {...props}
        className="custom-canvas"
      >
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col xs={12} md={7} className="line">
                <div className="mb-3">
                  Discover the top features enhancing your project management
                  process.
                </div>
                <Table>
                  <tr className="space">
                    <td>
                      <Stack gap={2}>
                        <Stack direction="horizontal" gap={2}>
                          <div>
                            <FontAwesomeIcon
                              icon={faListCheck}
                              style={{ color: "#1ba781" }}
                            />
                          </div>
                          <div className="">Project management</div>
                        </Stack>
                        <div className="fs-7">
                          Streamlined tasks, collaboration, and progress
                          tracking for efficient project management.
                        </div>
                      </Stack>
                    </td>

                    <td>
                      <Stack gap={2}>
                        <Stack direction="horizontal" gap={2}>
                          <div className="">
                            <FontAwesomeIcon
                              icon={faPeopleGroup}
                              style={{ color: "#5990d9" }}
                            />
                          </div>
                          <div className="">Team collaboration</div>
                        </Stack>
                        <div className="fs-7">
                          Effortlessly empowering teams for project success.
                        </div>
                      </Stack>
                    </td>
                  </tr>

                  <tr className="space">
                    <td>
                      <Stack gap={2}>
                        <Stack direction="horizontal" gap={2}>
                          <div className="">
                            <FontAwesomeIcon
                              icon={faChartGantt}
                              style={{ color: "#ffd43b" }}
                            />
                          </div>
                          <div className="">Task layout</div>
                        </Stack>
                        <div className="fs-7">
                          View your team's projects from every posible angle.
                        </div>
                      </Stack>
                    </td>

                    <td>
                      <Stack gap={2}>
                        <Stack direction="horizontal" gap={2}>
                          <div className="">
                            <FontAwesomeIcon
                              icon={faObjectUngroup}
                              style={{ color: "#e24646" }}
                            />
                          </div>
                          <div className="">Integration</div>
                        </Stack>
                        <div className="fs-7">
                          Connect to the other tools you love to make it easier
                          to track all of your work in one place and save time.
                        </div>
                      </Stack>
                    </td>
                  </tr>
                </Table>
              </Col>
              <Col xs={6} md={4} className="m-4">
                <div className="mb-4">Meet TaskAid</div>
                <div className="fs-7 mb-3">
                  TaskAid simplifies team collaboration for seamless
                  productivity. Trello organizes projects effortlessly. Get
                  started today!
                </div>
                <div className="tour">Take a tour</div>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasPlans({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} className="me-2">
        {name}
      </Nav.Link>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        {...props}
        className="custom-canvas"
      >
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Table style={{ width: "100px" }}>
                  <tr className="space">
                    <td>
                      <Stack gap={1}>
                        <Stack direction="horizontal" gap={1}>
                          <div>
                            <FontAwesomeIcon
                              icon={faLightbulb}
                              style={{ color: "#27b0ad" }}
                            />
                          </div>
                          <div className="">Standard</div>
                        </Stack>
                        <div className="fs-7">
                          For teams requiring enhanced workload management and
                          scalable collaboration.
                        </div>
                      </Stack>
                    </td>
                    <td>
                      <Stack gap={1}>
                        <Stack direction="horizontal" gap={1}>
                          <div>
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{ color: "#ff99df" }}
                            />
                          </div>
                          <div className="">Premium</div>
                        </Stack>
                        <div className="fs-7">
                          Ideal choice for multi-project tracking needs of teams
                          up to 100 members.
                        </div>
                      </Stack>
                    </td>
                    <td>
                      <Stack gap={1}>
                        <Stack direction="horizontal" gap={1}>
                          <div>
                            <FontAwesomeIcon
                              icon={faBuilding}
                              style={{ color: "#9c92d5" }}
                            />
                          </div>
                          <div className="">Enterprise</div>
                        </Stack>
                        <div className="fs-7">
                          All-inclusive solution for project management needs of
                          enterprise teams and admins.
                        </div>
                      </Stack>
                    </td>
                  </tr>
                  <tr className="space">
                    <td colSpan={3}>
                      <Stack gap={1}>
                        <Stack direction="horizontal" gap={1}>
                          <div>
                            <FontAwesomeIcon
                              icon={faBolt}
                              style={{ color: "#ffdc5c" }}
                            />
                          </div>
                          <div className="">Free</div>
                        </Stack>
                        <div className="fs-8">
                          Efficient solution for organizing work, perfect for
                          individuals or small teams.
                        </div>
                      </Stack>
                    </td>
                  </tr>
                </Table>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Navigationbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold logo">
            TaskAid
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <OffCanvasFeatures name="Features" />
              <OffCanvasPlans name="Plans" />
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/Login">Log in</Nav.Link>
              <Nav.Link href="/Register" className="get-started">
                Get Started
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
