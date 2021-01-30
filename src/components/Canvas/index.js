import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Canvas.css';
import Button from "react-bootstrap/Button";
const Canvas = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windowHeight: window.innerHeight };
        this.canvas = React.createRef();
    }
     handleResize = (e) => {
        this.setState({ windowHeight: window.innerHeight });
        this.setState({ windowWith: window.innerWidth });
       };
      
       componentDidMount() {
        window.addEventListener("resize", this.handleResize);
       }
      
       componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
       } 
    render() {
        const { windowHeight } = this.state;
        const { windowWidth } = this.state;
        return (
            <div>
            {/* <div className='canvasContainer'>
                <ReactSketchCanvas
                    ref={this.canvas}
                    strokeWidth={5}
                    strokeColor="black"
                    width= {windowWidth}
                    height= {windowHeight}
                    canvasColor=""
                />
                </div>
                <div className='buttons'>
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

            </div> */}
            </div>
        );
    }
};


export default Canvas;
