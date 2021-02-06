import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import Button from "react-bootstrap/Button";
import NumberField from '../NumberField/';
import EquationBox from '../EquationBox'
import { useMathContext, useEffect } from "../../utils/GlobalState"

function Canvas (props){
        const [state, dispatch] = useMathContext();
        function seeAnswer(){
            let answer;
            checkAnswer(answer)
        }
        function checkAnswer(answer) {
            if (answer === state.answer){
                dispatch({ type: "win" });
            } else {
                dispatch({ type: "loss" });
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
                
                canvasRef.current.clearCanvas()
                    }}>
                    submit
                </Button>
                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
                    canvasRef.current.clearCanvas()
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