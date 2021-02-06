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
        return (
            <div>
                <div className='canvasContainer'>
                    <EquationBox className="eqb"/>
                    <ReactSketchCanvas className="bg"
                        strokeWidth={5}
                        strokeColor="black"
                        width="100%"
                        height="100%"
                        background="rgba(201, 26, 26)"
                    />
                </div>
                <NumberField className="answer"/>
                <div className='buttons'>
                <Button bsPrefix='submitBtn' onClick={() => {
//                     this.canvas.current.
//                     clearCanvas();
// //Need to find a way to count the number of inputfields
//                     concatAnswer();
                    }}>
                    submit
                </Button>
                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
<<<<<<< HEAD
                    // this.canvas.current.
                    // resetCanvas()
                    }}
                >
=======
                    this.canvas.current.
                    resetCanvas()
                    }}>
>>>>>>> 22adbca42f0d6a7bb71c2e8627b5755c71632f8b
                    erase
                </Button>
                <Button
                    bsPrefix='eraseBtn'
                    onClick={() => {
<<<<<<< HEAD
                        // this.canvas.current.
                        // clearCanvas()
                        }}
                >
=======
                        this.canvas.current.
                        clearCanvas()
                        }}>
>>>>>>> 22adbca42f0d6a7bb71c2e8627b5755c71632f8b
                    skip
                </Button>
                </div>
            </div>
        );
    

};


export default Canvas;