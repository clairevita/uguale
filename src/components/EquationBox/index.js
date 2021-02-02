import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class EquationBox extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    random1: 0,
    random2: 0
  };

  componentDidMount() {
    this.generateRandoms()
  }

  // handleIncrement increments this.state.random1 by 1
  generateRandoms = () => {
    let difficulty = 2;
    let rand1 = Math.floor(Math.random() * (10 * difficulty));
    let rand2 = Math.floor(Math.random() * (10 * difficulty));
    // We always use the setState method to update a component's state
    this.setState({ random1: rand1, random2: rand2 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    if (this.state.random1 > this.state.random2) {
      return (
        <div>
          <p className="card-text">{this.state.random1} + </p>
      <p className="card-text">  {this.state.random2}</p>
          <button className="btn btn-primary" onClick={this.generateRandoms}>
            Generate
     </button>
        </div>
      );
    } else {
      return (
        <div>
          <p className="card-text">{this.state.random2} + </p>
      <p className="card-text"> {this.state.random1}</p>
          <button className="btn btn-primary" onClick={this.generateRandoms}>
            Generate
     </button>
        </div>
      );
    }
  }
}

export default EquationBox;
 