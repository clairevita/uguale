import React, { Component }  from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import HomeBttn from "../components/Buttons/HomeBttn/index";
import ConfigBttn from "../components/Buttons/ConfigBttn/index";
import Canvas from '../components/Canvas/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login  from "../components/Login/Login";


function Game() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md">
                    </Col>
                    <Col size="md-5" align="center">
                        <HomeBttn />
                    </Col>
                    <Col size="md-5" align="center">
                        <ConfigBttn />
                    </Col>
                    <Col size="md">
                    <Login/>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12" align="center">
                        <Canvas />
                    </Col>
                </Row>

            </Container>
    
        </div>
    );
}

export default Game;
