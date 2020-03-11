import React, {Component} from "react";
import Form from "./MainForm/Form.js";
import {Container, Row, Col} from "react-bootstrap";
import Logo from "./Images/pb-old-fashioned.svg";
import {Image} from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="show-grid">
            <Col xs={7}>
              <Image src={Logo} fluid/>
            </Col>
            <Col md={4}>
              <Form />
            </Col>
          </Row>
          <Row>
            <Col>
              
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              
            </Col>
            <Col xs={8}>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
