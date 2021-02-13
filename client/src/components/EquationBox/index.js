import React from "react";
import './EQBox.css';
import { useMathContext } from "../../utils/GlobalState";
import Row from "../components/Row";
import Col from "../components/Col";


// By extending the React.Component class, Counter inherits functionality from it
function EquationBox() {
  // Setting the initial state of the Counter component
  const [state, dispatch] = useMathContext();

  // The render method returns the JSX that should be rendered

  return (
   
    <div className="eqb">
      <div id="EQbox" className="jumbotron jumbotron-fluid text-center ">
        <div className="card-body">
    <Row>
      <Col>
      +
      </Col>
      <Col>
      <Row>
      {state.numberOne}
      </Row>
      <Row>
      {state.numberTwo}
      </Row>
      </Col>
    </Row>
          <p className="card-text">{state.numberOne} + {state.numberTwo}</p>    
        </div>
      </div>
    </div>

  );
}

export default EquationBox;
