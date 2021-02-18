import React, { useRef, useState } from "react";
import { useLocalState } from "../../utils/localS";
import { ReactSketchCanvas } from "react-sketch-canvas";

import './Canvas.css';
import API from '../../utils/API';
import EquationBox from '../EquationBox'
import { useMathContext, useEffect } from "../../utils/GlobalState"
import SubmitBttn from '../Buttons/SubmitBttn';
import SkipBttn from '../Buttons/SkipBttn';
import EraseBttn from '../Buttons/EraseBttn';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const curr = require('../../utils/Curr');


function Canvas(props) {
    const [state, dispatch] = useMathContext({});
    const [dif, setDif] = useLocalState("dif");
    // const [numbers, setNumbers] = useLocalState("numbers")
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let finalAnswer;
    console.log(props)
    function handleSkip() {
        let newMath = curr.equationSkip(state.difficulty);
        console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
        dispatch({
            type: "skip",
            difficulty: newMath[0],
            numberOne: newMath[1],
            numberTwo: newMath[2]
        });
    }

    function checkAnswer() {
        let userAnswer = state.answers.join("");
        finalAnswer = state.numberOne + state.numberTwo;
        dispatch({
            type: "setOld",
            numberOne: state.numberOne,
            numberTwo: state.numberTwo
        });
        setModalIsOpen(true);
        console.log(userAnswer, finalAnswer);
        if (userAnswer == finalAnswer) {
            let newMath = curr.equationWin(state.difficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            let numbers = newMath[1] + "," + newMath[2]
            API.updateStats({
                email: state.email,
                difficulty: newMath[0],
                lastIntegers: numbers
            })
            dispatch({
                type: "win",
                difficulty: newMath[0],
                numberOne: newMath[1],
                numberTwo: newMath[2],
                ans: "You are Awesome and SMART"
            });
        } else {
            let modDifficulty;
            if (state.difficulty === 2){
                modDifficulty = 3;
            } else {
                modDifficulty = state.difficulty;
            }
            let newMath = curr.equationLose(modDifficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            let numbers = newMath[1] + "," + newMath[2]  
            API.updateStats({
                email: state.email,
                difficulty: newMath[0],
                lastIntegers: numbers
            })
            dispatch({
                type: "loss",
                difficulty: newMath[0],
                numberOne: newMath[1],
                numberTwo: newMath[2],
                ans: ("You are doing great, the right answer was: " + finalAnswer)
            });
        }
    }

    const canvasRef = useRef(null)
    return (
        <div>
            <Container fluid>
            <div className='canvasContainer'>
                <ReactSketchCanvas className="bgCanvas"
                    ref={canvasRef}
                    text='This is a test'
                    strokeWidth={5}
                    strokeColor="black"
                    width="100%"
                    height="100%"
                    background="rgba(201, 26, 26)"

                />
                <EquationBox className="eqb" />
            </div>


            <Row xs={2} md={4}>
                <Col md="auto" xs={6} md={6} align="center">
                    <EraseBttn
                        onClick={() => {
                            canvasRef.current.clearCanvas();

                        }}
                    />
                </Col>
                <Col md="auto" xs={6} md={6} align="center">
                    <SkipBttn
                        show={modalIsOpen}
                        onHide={() => setModalIsOpen(false)}
                        onClick={() => {
                            setDif(state.difficulty);

                            handleSkip();
                            canvasRef.current.clearCanvas();
                        }}
                    />
                </Col>

            </Row>
            <Row>
                <Col size="md-12" align="center">
                    <SubmitBttn
                        show={modalIsOpen}
                        onHide={() => setModalIsOpen(false)}
                        onClick={() => {
                            setDif(state.difficulty);

                            checkAnswer();
                            canvasRef.current.clearCanvas();
                        }} />
                    <p>{dif}</p>
                </Col>
            </Row>
            </Container>
        </div>
    );


};


export default Canvas;