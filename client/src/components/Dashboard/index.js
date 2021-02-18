import React from "react";
import { useMathContext } from "../../utils/GlobalState";
import { Card, Row, Col, ButtonGroup, Jumbotron } from "react-bootstrap";
import "./dashboard.css";
import Button from "react-bootstrap/Button";
import '../../components/Buttons/buttons.css';
import { useHistory } from 'react-router';

function Dashboard() {
    let history = useHistory();
    const [state, dispatch] = useMathContext();
    let wronganswerString = state.wrongQuestions;
    let wrongAnswers;
    let index;
    if (wronganswerString != "") {
        wrongAnswers = wronganswerString.split("||");
        wrongAnswers.pop();
        console.log(wrongAnswers)
        index = wrongAnswers.length -1;
    }
    function setCurrent(equation, i) {
        let numbers = equation.split("+");
        let numberOne = parseInt(numbers[0])
        let numberTwo = parseInt(numbers[1])

        let toberemovedArr = wronganswerString.split("||");
        console.log(toberemovedArr);

        // toberemovedArr.join("||")
        dispatch({
            type: "setCurrent",
            difficulty: state.difficulty,
            numberOne: numberOne,
            numberTwo: numberTwo
        })
        relocation();
        console.log(state)
    }
    function relocation() {
        history.push("/game")
    }
    return (
        <div>
            <h2 className={'text-center text-' + state.night + state.themeStyle + ' jumbotron-fluid display-4 profile'}>hi,<span> {state.name.toLowerCase()}!</span></h2>

            <Row className="dash-row">
                <Col size="md-4">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Body className="left-padding">
                            <Row className="mini-dash-row">
                                <div className={'text-' + state.night + state.themeStyle + ' font-weight-bold text-lowercase'}>User Since:</div>
                            </Row>
                            <Row className="mini-dash-row">
                                <div className="h5 font-weight-bold text-secondary text-lowercase">{state.startDate}</div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Body className="left-padding">
                            <Row className="mini-dash-row">
                                <div className={'text-' + state.night + state.themeStyle + ' font-weight-bold text-lowercase'}># equations answered:</div>
                            </Row>
                            <Row className="mini-dash-row">
                                <div className="h5 font-weight-bold text-secondary text-lowercase"><span className="average-price">{state.correctHistory}</span></div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Body className="left-padding">
                            <Row className="mini-dash-row">
                                <div className={'text-' + state.night + state.themeStyle + ' font-weight-bold text-lowercase'}>difficulty modifier:</div>
                            </Row>
                            <Row className="mini-dash-row">
                                <div className="h5 font-weight-bold text-secondary text-lowercase"><span className="completion-rate">{state.difficulty}</span></div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="dash-row">
                <Col size="md-12">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Header>
                            <div className={'h5 font-weight-bold text-lowercase text-' + state.night + state.themeStyle}> you got this question wrong in the past, give it another shot!
                            </div>
                        </Card.Header>
                        <Card.Body className="left-padding">
                            <ButtonGroup className="list-group mini-dash-row">
                                {wrongAnswers ?
                                    <div>

                                        <br></br>
                                        <Button bsPrefix={state.night + state.themeStyle + ' DashBttn'}
                                            value={wrongAnswers[index]}
                                            data-index-number={[index]}
                                            onClick={() => {
                                                setCurrent(wrongAnswers[index]);
                                            }}
                                        >
                                            <i className="fa fa-pencil fa-fw"></i> <span>{wrongAnswers[index]}</span>
                                        </Button>
                                        <br></br>
                                    </div>
                            

                            :
                            <h2>nice job! no wrong answers!</h2>

                            }


                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;