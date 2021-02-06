import React, { Component } from "react";
import Wrapper from "../components/Wrapper/index";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import HomeBttn from "../components/Buttons/HomeBttn/index";
import ConfigBttn from "../components/Buttons/ConfigBttn/index";
import Canvas from '../components/Canvas/index';
import Logout from "../components/Logout/Logout";
function Game() {
    return (
        <div>
            <Wrapper>
                <Container>
                    <Row>
                        <Col size="md-6" align="center">
                            <HomeBttn />
                        </Col>
                        <Col size="md-6" align="center">
                            <ConfigBttn />
                        </Col>
                    </Row>


                    <Row>
                        <Col size="md-12" align="center">
                            <Canvas />
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-12" align="center">
                        </Col>

                    </Row>

                    <Row>
                        <Col size="md-12">
                            <Logout />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>

        </div>
    );
}

export default Game;
