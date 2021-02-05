import React from "react";

function HomeConfigContainer(props) {
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`} {...props}>
            <Row>
                <Col size="md-6" align="center">
                    <HomeBttn />
                </Col>
                <Col size="md-6" align="center">
                    <ConfigBttn />
                </Col>
            </Row>
        </div>
    );
}

export default HomeConfigContainer;