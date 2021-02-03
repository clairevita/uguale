import React from "react";
import Wrapper from "../components/Wrapper/index";
import Container from "../components/Container";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import HomeBttn from "../components/HomeBttn/index";
import ConfigBttn from "../components/ConfigBttn/index";
import SubmitBttn from "../components/SubmitBttn/index";
import EraseBttn from "../components/EraseBttn/index";
import EquationBox from "../components/EquationBox/index"
import Canvas from '../components/Canvas/index';
function Game() {

    return (
        <div>
            <Wrapper>
                <Container>
                <Row>
                        <Col size="md-6" align="center">
                        <HomeBttn/>
                        </Col>
                        <Col size="md-6" align="center">
                        <ConfigBttn/>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-12" align="center">
                            <EquationBox />
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
                </Container>
            </Wrapper>
    
        </div>
    );
}

export default Game;
