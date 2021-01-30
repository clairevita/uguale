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
                <section>
                    <canvas className="main-canvas"></canvas>
                    <canvas className="small-canvas"></canvas>
                    <div className="prediction"></div>
                </section>

                <button id="erase">Clear</button>
            </div>
           
        );
    }
};


export default Canvas;
