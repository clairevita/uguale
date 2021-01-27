import React from "react";
import Wrapper from "../Wrapper/index";
import Container from "../Container";
import Row from "../Row/index";
import Col from "../Col/index";
import HomeBttn from "../HomeBttn/index";
import ConfigBttn from "../ConfigBttn/index";
import SubmitBttn from "../SubmitBttn/index";
import EraseBttn from "../EraseBttn/index";
import EquationBox from "../EquationBox/index"

function MathContainer() {

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

export default MathContainer;
