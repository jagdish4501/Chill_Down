import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import "./footer.css";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seller-profile",
  }, 
  { 
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6">
              <div className="logo">
                <h2 className="d-flex gap-2 align-items-center">
                  <span>
                    <i className="ri-mental-health-fill"></i>
                  </span>
                Chill Down
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  corporis vero natus harum et veritatis totam id sit nemo,
                  deleniti dolor consequatur, ex rem quae, ipsam quidem debitis
                  repellat!
                </p>
              </div>
            </Col>
            <Col lg="2" md="3" sm="6">
              <h5>My Account</h5>
              <ListGroup className="list_group">
                {MY__ACCOUNT.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url} className="">
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="3" sm="6">
              <h5>Resources</h5>
              <ListGroup className="list_group">
                {RESOURCES.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url} className="">
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="3" sm="6">
              <h5>Company</h5>
              <ListGroup className="list_group">
                {COMPANY.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url} className="">
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="6" sm="6">
              <h5>Newsletter</h5>
              <input type="text" className="newsletter" placeholder="Email" />
              <div className="social_links d-flex gap-3 align-items-center">
                <span>
                  <Link to="#">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-twitter-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-telegram-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-discord-line"></i>
                  </Link>
                </span>
              </div>
            </Col>
            <Col lg="12" className="mt-4 text-center">
              <p className="copyright">
                {" "}Copyrights 2022, Developed by Code Tornades. All Rights Reserved.
              {" "}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
