import React, {Component} from "react";
import Form from "./MainForm/Form.js";
import {Container, Row, Col} from "react-bootstrap";
import Logo from "./Images/pb-old-fashioned.svg";
import {Image} from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from "./MainIcons/Icons.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      isClick: !state.isClick
    }));
  }

  render() {
    return (
      <div className="topGrid">
        <Container>
          <Row className="show-grid">
            <Col xs={7}>
              <Image src={Logo} fluid/>
            </Col>
            <Col md={4}>
              <Form />
            </Col>
          </Row>
          <Row className="rowSpacing largeText">
            <Col>
              All Cocktails
              <hr className="horizontalLine"/>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <a href="" onClick={this.handleClick}>
                <Icons />
              </a>
            </Col>
            <Col xs={8}>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
