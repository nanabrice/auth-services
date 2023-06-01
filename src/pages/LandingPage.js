import Navbar from "../components/Navigationbar";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Container>
        <h2>This is the landing page</h2>
        <div>
          <Link to="/Register">Sign up</Link>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
