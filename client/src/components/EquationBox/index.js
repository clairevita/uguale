import React from "react";
import './EQBox.css';
import { useMathContext } from "../../utils/GlobalState";
import Row from "../Row/index";
import Col from "../Col/index";
import {NumberField} from '../NumberField/index'
// By extending the React.Component class, Counter inherits functionality from it
function EquationBox() {
  // Setting the initial state of the Counter component
  const [state, dispatch] = useMathContext();

  // The render method returns the JSX that should be rendered

  return (
    <div className="eqb">
      <div id="EQbox" className="jumbotron jumbotron-fluid text-center">
        <div className="card-body">
    <Row className="unselectable">
      <Col size="sm-4" align="center">
      <span className="unselectable">+</span>
      </Col>
      <Col size="sm-8" align="center" className="unselectable">
      <span className="unselectable">{state.numberOne}</span>
      <br />
      <span className="unselectable">{state.numberTwo}</span>
      </Col>
    </Row>
    <br></br>
    <Row>
    <NumberField className="answer unselectable"
            />
    </Row>
          {/* <p className="card-text">{state.numberOne} + {state.numberTwo}</p>     */}
        </div>
      </div>
    </div>

  );
}

export default EquationBox;
