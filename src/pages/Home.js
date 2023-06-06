import AppNavBar from "../components/AppNavBar";

import Stack from "react-bootstrap/esm/Stack";
import Container from "react-bootstrap/esm/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faTable } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Home = () => {
  return (
    <>
      <AppNavBar />

      <Container className="full-body">
        <div className="m-5">
          <Stack direction="horizontal" gap={3}>
            <Stack gap={1}>
              <div className="">
                <h2>EVIL Corp.</h2>
              </div>
              <div className="">
                <p>Public | x member | Add Bookmark</p>
              </div>
            </Stack>
            <div className="">
              <p>
                <FontAwesomeIcon
                  icon={faShareNodes}
                  style={{ color: "#00000" }}
                  size="lg"
                  className="me-2"
                />
                Share
              </p>
            </div>
          </Stack>
        </div>

        <Stack direction="horizontal" gap={2}>
        <div>
            <FontAwesomeIcon icon={faTable} />
        </div>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
