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
                    <Button bsPrefix="submitBtn"
                        onClick={() => {
                            this.canvas.current.
                                exportImage("png")
                                .then(data => {
                                    console.log(data);
                                })
                                .catch(event => {
                                    console.log(event);
                                });
                        }}
                    >
                        submit
                    </Button>

                    <Button bsPrefix="eraseBtn"
                        onClick={() => {
                            this.canvas.current.
                                resetCanvas()

                        }}
                    >
                        erase
                    </Button>

                </div>
            </div>
        );
    }
};


export default Canvas;
