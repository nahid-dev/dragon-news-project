import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../qZone/Qzone";
import rightBg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button variant="outline-primary" className="d-block w-100 mb-3">
        <FaGoogle></FaGoogle> Login with Google
      </Button>
      <Button variant="outline-secondary" className="d-block w-100">
        <FaGithub></FaGithub> Login with GitHub
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzone></Qzone>
      </div>
      <div
        className="py-5 px-5 text-white text-center"
        style={{ backgroundImage: `url(${rightBg})`, backgroundSize: "cover" }}
      >
        {/* <img className="w-100" src={rightBg} alt="" /> */}
        <h4 className="fs-3 fw-bold mb-4">Create an Amazing Newspaper</h4>
        <p className="mb-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger" size="lg">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
