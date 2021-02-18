import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import StartBttn from "../components/StartBttn";
import logo from '../images/uguale-logo-brown.png';
import Login from "../components/Login/Login";
import './home.css';
import NewUserModal from '../components/NewUserModal';
function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <div className="Homebg"></div>
        <div className="Homebg bg2"></div>
        <div className="Homebg bg3"></div>
        <Row>
          <Col size="md-2">
          </Col>
          <Col size="md">
           <img className= "logoHeader" src={logo}/>
          </Col>
          <Col size="md-2">
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. 
            </p>
          </Col>
        </Row>

        <Row>
          <Col size="md">
          </Col>
          <Col size="md-4">
            <div>
              <StartBttn />
            </div>
          </Col>
          <Col size="md">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Login/>
          </Col>
        </Row>
      </Container>
      <NewUserModal />
    </div>
  );
}

export default Home;