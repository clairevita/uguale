import React from "react";
import './EQBox.css';
import { useMathContext } from "../../utils/GlobalState"
// By extending the React.Component class, Counter inherits functionality from it
function EquationBox() {
  // Setting the initial state of the Counter component
  const [state, dispatch] = useMathContext();

  // handleIncrement increments this.state.random1 by 1
  // The render method returns the JSX that should be rendered

  return (
    <div>
      <div id="EQbox" className="jumbotron jumbotron-fluid text-center ">
        <div className="card-body">
          <p className="card-text">{this.state.random1} + {this.state.random2}</p>
        </div>
      </div>
    </div>
  );

}

export default EquationBox;
