import React, {Component} from "react";
import Form from "./MainForm/Form.js";
import {Container, Row, Col} from "react-bootstrap";
import Logo from "./Images/pb-old-fashioned.svg";
import {Image} from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from "./MainIcons/Icons.js";
import IconDetails from "./IconDetails/IconDetails.js";
import SearchPage from "./SearchPage/SearchPage.js";


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
    })
    );
  }

  render() {
    return (
      <div className="topGrid">
        <Container>
          {/* <Row className="rowSpacing">
            <Col xs={{ span: 4, offset: 7}}>
              <div className="inlineButton">
                <SearchPage />
                <button className="btn btn-primary login">Login</button>
                <button className="signUp">Sign Up</button>
              </div>
            </Col>
          </Row> */}
          <Row className="show-grid">
            <Col xs={7}>
              <Image src={Logo} fluid/>
            </Col>
            <Col md={4}>
              <div className="inlineButton rowSpacing">
                <SearchPage />
                <button className="btn btn-light" variant="light">Login</button>
                <button className="btn btn-dark" variant="dark">Sign Up</button>
              </div>
              <Form />
            </Col>
          </Row>
          <Row className="rowTopSpacing largeText">
            <Col>
              All Cocktails
              <hr className="horizontalLine"/>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <a href="/#" onClick={this.handleClick}>
                <Icons />
              </a>
            </Col>
            <Col xs={7}>
              <a href="/#" onClick={this.handleClick}>
                <IconDetails />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
