import React from "react";
import './EQBox.css';
<<<<<<< HEAD

=======
import { ReactSketchCanvas } from "react-sketch-canvas";
>>>>>>> 20ecb2626b9b43a4b60c2d39eef8f7f19f66b18b
// By extending the React.Component class, Counter inherits functionality from it
class EquationBox extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        random1: 0,
        random2: 0
    };
<<<<<<< HEAD

    // handleIncrement increments this.state.random1 by 1
    generateRandoms = () => {
        let difficulty = 2;
        let rand1 = Math.floor(Math.random() * (10 * difficulty));
        let rand2 = Math.floor(Math.random() * (10 * difficulty));
        // We always use the setState method to update a component's state
        this.setState({ random1: rand1, random2: rand2 });
    };

=======

  componentDidMount() {
    this.generateRandoms()
  }

  // handleIncrement increments this.state.random1 by 1
  generateRandoms = () => {
    let difficulty = 2;
    let rand1 = Math.floor(Math.random() * (10 * difficulty));
    let rand2 = Math.floor(Math.random() * (10 * difficulty));
    // We always use the setState method to update a component's state
    this.setState({ random1:  rand1,  random2:  rand2});
  };
>>>>>>> 20ecb2626b9b43a4b60c2d39eef8f7f19f66b18b
    // The render method returns the JSX that should be rendered
    render() {
        return (
            <div>
                <div id="EQbox" className="jumbotron jumbotron-fluid text-center ">
                    <div className="card-body">
                        <p className="card-text">{this.state.random1} + {this.state.random2}</p>
                    </div>
                </div>
                <button id="generateBtn" className="btn btn-primary" onClick={this.generateRandoms}>
                    Generate
                </button>
            </div>
        );
    }
}

export default EquationBox;
