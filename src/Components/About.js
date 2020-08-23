import React from "react";
import Fade from "react-reveal/Fade";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <div style={{ background: "tomato", height: "100vh" }}>
      <Fade left>
        <Card>
          <CardTitle>Hey</CardTitle>
        </Card>
      </Fade>
    </div>
  );
}

export default About;
