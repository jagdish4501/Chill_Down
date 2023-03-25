import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Achievements",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-goblet-line",
    visit: "ri-arrow-right-line",
  },
  {
    title: "Supporting others",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-hand-heart-line",
    visit: "ri-arrow-right-line",
  },
  {
    title: "To-Do list",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-sticky-note-line",
    visit: "ri-arrow-right-line",
  },
  {
    title: "Time for passion",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-time-line",
    visit: "ri-arrow-right-line",

  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="step__title">ManShukh a place for you to recreate yourself...</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index}>
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <br />
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
                <div className="visit">
                <span >
                  <i  class={item.visit}></i>
                  </span>
                  </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
