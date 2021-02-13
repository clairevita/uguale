import React from "react";
import './EQBox.css';
import { useMathContext } from "../../utils/GlobalState";
import Row from "..//Row";
import Col from "../Col";
import { NumberField } from "../NumberField";


// By extending the React.Component class, Counter inherits functionality from it
function EquationBox() {
  // Setting the initial state of the Counter component
  const [state, dispatch] = useMathContext();

  // The render method returns the JSX that should be rendered

  return (


    <div id="EQbox" className="jumbotron jumbotron-fluid text-center ">
      <div className="card-body">
        <Row>
          <Col size="">
            +
          </Col>
          <Col size="">
            <Row>
              {state.numberOne}
            </Row>
            <Row>
              {state.numberTwo}
            </Row>
            <Row>
          <NumberField className="answer" />
        </Row>
          </Col>
        </Row>

      </div>


    </div>


  );
}

export default EquationBox;
