import React from "react";
<<<<<<< HEAD:src/components/MathContainer/MathContainer.js
import Wrapper from "../Wrapper/index";
import Container from "../Container";
import Row from "../Row/index";
import Col from "../Col/index";
import HomeBttn from "../HomeBttn/index";
import ConfigBttn from "../ConfigBttn/index";
import SubmitBttn from "../SubmitBttn/index";
import EraseBttn from "../EraseBttn/index";
import EquationBox from "../EquationBox/index";
import Canvas from "../Canvas/index";
function MathContainer() {
=======
import Wrapper from "../components/Wrapper/index";
import Container from "../components/Container";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import HomeBttn from "../components/HomeBttn/index";
import ConfigBttn from "../components/ConfigBttn/index";
import SubmitBttn from "../components/SubmitBttn/index";
import EraseBttn from "../components/EraseBttn/index";
import EquationBox from "../components/EquationBox/index"

function Game() {
>>>>>>> 45f49c1fbff883a6b68c97e58e17dccd47ea08ef:src/pages/Game.js

    return (
        <div>
            <Wrapper>
                <Container>
                    <Row>
                        <Col>
                        <HomeBttn/>
                        </Col>
                        <Col>
                        <ConfigBttn/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <EquationBox />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Canvas />
                            <p> WRITING AREA</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                         <EraseBttn/>
                        </Col>
                        <Col>
                        <SubmitBttn/>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
    
        </div>
    );
}

export default Game;
