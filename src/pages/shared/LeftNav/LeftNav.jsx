import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment/moment";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div>
        <h4>All Category</h4>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black fw-semibold"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <Row xs={1} md={1} lg={1} className="g-4 mt-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <p>
                  <span className="fw-bold me-3">Sports</span>
                  <FaCalendarAlt className="me-3"></FaCalendarAlt>
                  <span>{moment().format("MMM D, yyyy")}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <p>
                  <span className="fw-bold me-3">Sports</span>
                  <FaCalendarAlt className="me-3"></FaCalendarAlt>
                  <span>{moment().format("MMM D, yyyy")}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <p>
                  <span className="fw-bold me-3">Sports</span>
                  <FaCalendarAlt className="me-3"></FaCalendarAlt>
                  <span>{moment().format("MMM D, yyyy")}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LeftNav;
