import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import Button from "react-bootstrap/Button";
import NumberField from '../NumberField';

const Canvas = class extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }
    render() {
        return (
            <div>
                <div className='canvasContainer'>
                    <ReactSketchCanvas
                        ref={this.canvas}
                        strokeWidth={5}
                        strokeColor="black"
                        width="100%"
                        height="100%"
                        background="url(https://cdn5.vectorstock.com/i/1000x1000/16/14/graph-paper-background-vector-3851614.jpg)"
                    />
                </div>
                <NumberField />
                <div className='buttons'>
                <Button bsPrefix='submitBtn' onClick={() => {
                    this.canvas.current.
                    clearCanvas()
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
    }

};


export default Canvas;