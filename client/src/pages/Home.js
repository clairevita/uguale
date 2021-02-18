import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import StartBttn from "../components/StartBttn";
import logo from '../images/uguale-logo-brown.png';
import Login from "../components/Login/Login";
import CreatorBttn from "../components/Buttons/CreatorBttns";
import './home.css';

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
            <h1>A Math Application Done the Right Way </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p className="text-center">
              A simple web application for new and returning mathematicians.
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
        <Row>
        <Col size="md-12">
          <br/>
          <br />
            <h2>Designed, Developed, Deployed by:</h2>
          </Col>
          <Col size="md-12">
            <CreatorBttn />
          </Col>
        </Row>
      </Container>
  
    </div>
  );
}

export default Home;