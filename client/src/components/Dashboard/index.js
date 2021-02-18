import React from "react";
import { useMathContext } from "../../utils/GlobalState";
import { Card, Row, Col, ButtonGroup, Jumbotron } from "react-bootstrap";
import DashBttn from "../Buttons/DashBttn"
import "./dashboard.css";


function Dashboard() {
    const [state, dispatch] = useMathContext();
    return (
        <div>
            <h2 className={'text-center text-' + state.night + state.themeStyle + ' jumbotron-fluid display-4 profile'}>PROFILE<span> USER.EMAIL?</span></h2>

            <Row className="dash-row">
                <Col Size="md-4">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Body className="left-padding">
                            <Row className="mini-dash-row">
                                <div className={'text-' + state.night + state.themeStyle + ' font-weight-bold text-uppercase'}>User Since:</div>
                            </Row>
                            <Row className="mini-dash-row">
                                <div className="h5 font-weight-bold text-secondary text-uppercase">Feb 2, 2020</div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col Size="md-4">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Body className="left-padding">
                            <Row className="mini-dash-row">
                                <div className={'text-' + state.night + state.themeStyle + ' font-weight-bold text-uppercase'}># of Days Practiced:</div>
                            </Row>
                            <Row className="mini-dash-row">
                                <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="average-price">17</span></div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col Size="md-4">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Body className="left-padding">
                            <Row className="mini-dash-row">
                                <div className={'text-' + state.night + state.themeStyle + ' font-weight-bold text-uppercase'}>Completion Rate:</div>
                            </Row>
                            <Row className="mini-dash-row">
                                <div className="h5 font-weight-bold text-secondary text-uppercase"><span className="completion-rate">90%</span></div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="dash-row">
                <Col Size="md-12">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Header>
                            <div className={'h4 font-weight-bold text-uppercase text-' + state.night + state.themeStyle}> Give these another try:
                            </div>
                        </Card.Header>
                        <Card.Body className="left-padding">
                            <ButtonGroup className="list-group mini-dash-row">
                                <DashBttn> 
                                </DashBttn>
                                <br/>
                                <DashBttn>
                                </DashBttn>
                                <br/>
                                <DashBttn>
                                </DashBttn>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;





            // {/* <Jumbotron className={'text-center ' + state.night + state.themeStyle + 'dash jumbotron-fluid'}> 
            //     <h2 className="display-4 profile">PROFILE<span> USER.EMAIL?</span></h2>
            // </Jumbotron> */}
// className={state.night + state.themeStyle + 'main'}
// {/* <hr class="my-4"></hr> */}