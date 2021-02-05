import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import Button from "react-bootstrap/Button";
import NumberField from '../NumberField/';
import EquationBox from '../EquationBox'
import { useMathContext } from "../../utils/GlobalState"

function Canvas (props){

        const [state, dispatch] = useMathContext();

        function concatAnswer(){
            let answer = 5
            checkAnswer(answer)
        }
        function checkAnswer(answer) {
            if (answer === state.answer){
                dispatch({ type: "win" });
            } else {
                dispatch({ type: "loss" });
            }
        }
        return (
            <div>
                <div className='canvasContainer'>
                    <EquationBox className="eqb"/>
                    <ReactSketchCanvas className="bg"
                        ref={this.canvas}
                        strokeWidth={5}
                        strokeColor="black"
                        width="100%"
                        height="100%"
                        background="rgba(201, 26, 26)"
                    />
                    <NumberField className="answer"/>
                </div>
              
                <div className='buttons'>
                <Button bsPrefix='submitBtn' onClick={() => {
                    this.canvas.current.
                    clearCanvas();
//Need to find a way to count the number of inputfields
                    concatAnswer();

                    }}>
                    submit
                </Button>

                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
                    this.canvas.current.
                    resetCanvas()
                    }}
                >
                    erase
                </Button>

                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
                        this.canvas.current.
                        clearCanvas()
                        }}
                >
                    skip
                </Button>
                </div>
            </div>
        );
    

};


export default Canvas;