import React, { Component }  from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import HomeBttn from "../components/Buttons/HomeBttn/index";
import ConfigBttn from "../components/Buttons/ConfigBttn/index";
import Canvas from '../components/Canvas/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logout  from "../components/Logout/Logout";

function Game() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md">
                    </Col>
                    <Col size="md-4" align="center">
                        <HomeBttn />
                    </Col>
                    <Col size="md-4" align="center">
                        <ConfigBttn />
                    </Col>
                    <Col size="md">
                    </Col>
                </Row>


                <Row>
                    <Col size="md-12" align="center">
                        <Canvas />
                    </Col>
                </Row>

                <Row>
                    <Col size="md-3" align="center">
                    </Col>

                </Row>
                <Logout/>
            </Container>
    
        </div>
    );
}

export default Game;
