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
<<<<<<< HEAD
                    <ReactSketchCanvas
=======
                <ReactSketchCanvas
>>>>>>> 20ecb2626b9b43a4b60c2d39eef8f7f19f66b18b
                        ref={this.canvas}
                        strokeWidth={5}
                        strokeColor="black"
                        width="100%"
                        height="100%"
<<<<<<< HEAD

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

=======
                    />
                </div>
                <div className='buttons'>
                <Button bsPrefix='submitBtn'>
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
>>>>>>> 20ecb2626b9b43a4b60c2d39eef8f7f19f66b18b
                </div>
            </div>
        );
    }
    
};


export default Canvas;