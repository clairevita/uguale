import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeBttn from "../components/Buttons/HomeBttn";
import ConfigBttn from "../components/Buttons/ConfigBttn";
import Dashboard from "../components/Dashboard";




function User() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-5" align="center">
                        <HomeBttn />
                    </Col>
                    <Col size="md-5" align="center">
                        <ConfigBttn />
                    </Col>
                </Row>
                <Dashboard />
            </Container>
        </div>
    )
}

export default User;