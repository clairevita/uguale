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
                        className="ReactSketchCanvas"
                    >

                    </ReactSketchCanvas>

                </div>
                <NumberField />
                <div className='buttons'>
                    <Button bsPrefix='submitBtn'
                        onClick={() => {
                            this.canvas.current.
                                resetCanvas()
                        }}
                    >
                        Submit
                </Button>

                    <Button
                        bsPrefix='eraseBtn'
                        onClick={() => {
                            this.canvas.current.
                                resetCanvas()
                        }}
                    >
                        Erase
                </Button>
                </div>
            </div>
        );
    }

};


export default Canvas;