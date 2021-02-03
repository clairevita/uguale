import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import Button from "react-bootstrap/Button";
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
                    />
                </div>
                <div className='buttons'>
                <Button>
                    Submit
                </Button>

                <Button
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