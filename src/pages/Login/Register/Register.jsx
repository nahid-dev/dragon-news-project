import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <Container className="w-25 max-auto">
      <h3 className="display-5">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Photo URL"
            name="photo"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Term & conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        {/* Very intresting things */}
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <br />
        <Form.Text>
          Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
