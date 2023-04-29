import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}
            {user ? (
              <Button onClick={handleLogOut} variant="secondary">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="warning">Login</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
