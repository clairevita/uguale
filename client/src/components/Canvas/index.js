import React, { useRef, useState } from "react";
import { useLocalState } from "../../utils/localS";
import { ReactSketchCanvas } from "react-sketch-canvas";

import './Canvas.css';

import EquationBox from '../EquationBox'
import { useMathContext, useEffect } from "../../utils/GlobalState"
import SubmitBttn from '../Buttons/SubmitBttn';
import SkipBttn from '../Buttons/SkipBttn';
import EraseBttn from '../Buttons/EraseBttn';
import Row from "../Row/index";
import Col from "../Col/index";
const curr = require('../../utils/Curr');


function Canvas(props) {
    const [state, dispatch] = useMathContext();
    const [dif, setDif] = useLocalState("dif");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let finalAnswer;

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
            dispatch({
                type: "win",
                difficulty: newMath[0],
                numberOne: newMath[1],
                numberTwo: newMath[2],
                ans: "You are Awesome and SMART"
            });
        } else {
            let newMath = curr.equationLose(state.difficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            dispatch({
                type: "loss",
                difficulty: newMath[0],
                numberOne: newMath[1],
                numberTwo: newMath[2],
                ans: ("You are doing great, the right answer was: "+finalAnswer)
            });
        }
    }

    const canvasRef = useRef(null)
    return (
        <div>
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


            <Row>
                <Col size="md-6" align="center">
                    <EraseBttn
                        onClick={() => {
                            canvasRef.current.clearCanvas();

                        }}
                    />
                </Col>
                <Col size="md-6" align="center">
                    <SkipBttn
                        onClick={() => { 
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

        </div>
    );


};


export default Canvas;