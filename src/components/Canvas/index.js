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
            <div className='canvasContainer'>
                <ReactSketchCanvas
                    ref={this.canvas}
                    strokeWidth={5}
                    strokeColor="black"
                    width="100%"
                    height="100%"

                />
                <Button
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
        );
    }
};


export default Canvas;
