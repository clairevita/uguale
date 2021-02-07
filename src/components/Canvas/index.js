import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import Button from "react-bootstrap/Button";
import {NumberField} from '../NumberField/';
import EquationBox from '../EquationBox'
import { useMathContext, useEffect } from "../../utils/GlobalState"

function Canvas (props){
        const [state, dispatch] = useMathContext();

        function checkAnswer() {
            let userAnswer = state.answers.join("");
            let finalAnswer = state.numberOne + state.numberTwo;
            console.log(userAnswer, finalAnswer);
            if (userAnswer == finalAnswer){
                console.log("win")
                dispatch({ 
                    type: "win" ,
                    numberOne: state.numberOne + 10,
                    numberTwo: state.numberTwo + 3
            });
            } else {
                console.log("loss")
                dispatch({ 
                    type: "loss",
                    numberOne: state.numberOne - 1,
                    numberTwo: state.numberTwo - 1
            });
            }
        }
        const canvasRef = useRef(null)
        return (
            <div>
                <div className='canvasContainer'>
                    <EquationBox className="eqb"/>
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
                <div className='buttons'>
                <Button bsPrefix='submitBtn' onClick={() => {
                checkAnswer();
                canvasRef.current.clearCanvas()
                    }}>
                    submit
                </Button>
                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
                    canvasRef.current.clearCanvas();
                    
                    }}
                >
                    erase
                </Button>
                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
                        canvasRef.current.clearCanvas()
                        }}
                >
                    skip
                </Button>
                </div>
            </div>
        );
    

};


export default Canvas;