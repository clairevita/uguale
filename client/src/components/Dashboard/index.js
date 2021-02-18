import React from "react";
import { useMathContext } from "../../utils/GlobalState";
import { Card, Row, Col, ButtonGroup, Jumbotron } from "react-bootstrap";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../../components/Buttons/buttons.css';
import { useHistory } from 'react-router';

function Dashboard() {
    let history = useHistory();
    const [state, dispatch] = useMathContext();
    let wronganswerString = state.wrongQuestions;
    let wrongAnswers;
    if (wronganswerString != ""){
        wrongAnswers = wronganswerString.split("||");
        wrongAnswers.pop();
    } else {
        
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
            // wrongQuestions: stringSplice
        })
        relocation();
        console.log(state)
    }
    function relocation() {
        history.push("/game")
    }
    return (
        <div>
            <h2 className={'text-center text-' + state.night + state.themeStyle + ' jumbotron-fluid display-4 profile'}>PROFILE<span> USER.EMAIL?</span></h2>

            <Row className="dash-row">
                <Col size="md-4">
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
                <Col size="md-4">
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
                <Col size="md-4">
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
                <Col size="md-12">
                    <Card bsPrefix={'border-left-' + state.night + state.themeStyle + ' shadow p-3 mb-5 bg-white rounded'}>
                        <Card.Header>
                            <div className={'h4 font-weight-bold text-uppercase text-' + state.night + state.themeStyle}> Give these another try:
                            </div>
                        </Card.Header>
                        <Card.Body className="left-padding">
                            <ButtonGroup className="list-group mini-dash-row">
                            {wrongAnswers ? 
                            <div>
                            {wrongAnswers.map((wrongAnswer, index) => (
                                <div>
                                    <br></br>
                                
                                        <Button bsPrefix={state.night + state.themeStyle + ' DashBttn'}
                                            value={wrongAnswer}
                                            data-index-number={[index]}
                                            onClick={() => {
                                                setCurrent(wrongAnswer, index);
                                            }}
                                        >
                                            <i className="fa fa-pencil fa-fw"></i> <span>{wrongAnswer}</span>
                                        </Button>
                                  
                                    <br></br>
                                </div>
                            ))
                            }
                            </div>
                            : 
                            <h2>Nice Job! No Wrong Answers!</h2>
                            
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