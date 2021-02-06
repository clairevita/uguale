import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import StartBttn from "../components/StartBttn";
import Footer from "../components/Footer";
import logo from '../images/uguale-logo-brown.png';
import Login from "../components/Login/Login";
import './home.css';

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
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
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <StartBttn/>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Login/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;