import React, { useRef } from "react";
import {useLocalState} from "../../utils/localS";
import { ReactSketchCanvas } from "react-sketch-canvas";

import './Canvas.css';
import API from '../../utils/API';
import EquationBox from '../EquationBox'
import { useMathContext, useEffect } from "../../utils/GlobalState"
import SubmitBttn from '../Buttons/SubmitBttn';
import SkipBttn from '../Buttons/SkipBttn';
import EraseBttn from '../Buttons/EraseBttn';
import Row from "../Row/index";
import Col from "../Col/index";
const curr= require('../../utils/Curr');


function Canvas(props) {
    const [state, dispatch] = useMathContext(state);
    const [dif, setDif] = useLocalState("dif");
    const [numbers, setNums] = useLocalState("numbers");
    
    function handleSkip(){
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
        let finalAnswer = state.numberOne + state.numberTwo;
        console.log(userAnswer, finalAnswer);
        if (userAnswer == finalAnswer) {
            let newMath = curr.equationWin(state.difficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            setNums([newMath[1], newMath[2]]);
            API.updateStats({
                email: state.email,
                difficulty: dif,
                lastIntegers: numbers,
                wrongQuestions: "Test"
            })
            dispatch({
                    type: "win",
                    difficulty: newMath[0],
                    numberOne: newMath[1],
                    numberTwo: newMath[2]
                });
        } else {
            let newMath = curr.equationLose(state.difficulty);
            console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
            setNums([newMath[1], newMath[2]]);
            dispatch({
                type: "loss",
                difficulty: newMath[0],
                numberOne: newMath[1],
                numberTwo: newMath[2]
            })
        }
    }
    
    const canvasRef = useRef(null)
    return (
        <div>
            <div className='canvasContainer'>
                <ReactSketchCanvas className="bgCanvas"
                    ref={canvasRef}
                    text= 'This is a test'
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
                        onClick={() => {
                            setDif(state.difficulty);
                            
                            checkAnswer();
                            canvasRef.current.clearCanvas()
                        }} />
                        <p>{dif}</p>
                        {/* <p>{numbers.toString()}</p> */}
                </Col>
            </Row>

        </div>
    );


};


export default Canvas;