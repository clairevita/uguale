import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import { NumberField } from '../NumberField/';
import EquationBox from '../EquationBox'
import { useMathContext, useEffect } from "../../utils/GlobalState"
import SubmitBttn from '../Buttons/SubmitBttn';
import SkipBttn from '../Buttons/SkipBttn';
import EraseBttn from '../Buttons/EraseBttn';
import Row from "../Row/index";
import Col from "../Col/index";
const curr= require('../../utils/Curr');

function Canvas(props) {
    const [state, dispatch] = useMathContext();

    function checkAnswer() {
        let userAnswer = state.answers.join("");
        let finalAnswer = state.numberOne + state.numberTwo;
        console.log(userAnswer, finalAnswer);
        if (userAnswer == finalAnswer) {
            let newMath = curr.equationWin(state.difficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            dispatch({
                    type: "win",
                    difficulty: newMath[0],
                    numberOne: newMath[1],
                    numberTwo: newMath[2]
                });
        } else {
            let newMath = curr.equationLose(state.difficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            dispatch({
                type: "loss",
                difficulty: newMath[0],
                numberOne: newMath[1],
                numberTwo: newMath[2]
            });
        }
    }
    const canvasRef = useRef(null)
    return (
        <div>
            <div className='canvasContainer'>
                <EquationBox className="eqb" />
                <ReactSketchCanvas className="bgCanvas"
                    ref={canvasRef}
                    strokeWidth={5}
                    strokeColor="black"
                    width="100%"
                    height="100%"
                    background="rgba(201, 26, 26)"
                />
            </div>
            <NumberField className="answer"
            />

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
                            canvasRef.current.clearCanvas()
                        }}
                    />
                </Col>

            </Row>
            <Row>
                <Col size="md-12" align="center">
                    <SubmitBttn
                        onClick={() => {
                            checkAnswer();
                            canvasRef.current.clearCanvas()
                        }} />
                </Col>
            </Row>

        </div>
    );


};


export default Canvas;