import React from "react";
import './EQBox.css';
import { useMathContext } from "../../utils/GlobalState";
// By extending the React.Component class, Counter inherits functionality from it
function EquationBox() {
  // Setting the initial state of the Counter component
  const [state, dispatch] = useMathContext();
  // handleIncrement increments this.state.random1 by 1
  // generateRandoms = () => {
  //   let difficulty = 2;
  //   let rand1 = Math.floor(Math.random() * (10 * difficulty));
  //   let rand2 = Math.floor(Math.random() * (10 * difficulty));
  //   // We always use the setState method to update a component's state
  //   this.setState({ random1:  rand1,  random2:  rand2});
  // };

  // The render method returns the JSX that should be rendered

  return (
   
    <div className="eqb">
      <div id="EQbox" className="jumbotron jumbotron-fluid text-center ">
        <div className="card-body">
          <p className="card-text">{state.numberOne} + {state.numberTwo}</p>    
        </div>
      </div>
    </div>

  );
}

export default EquationBox;
