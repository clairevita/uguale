import React from "react";
import './EQBox.css';
import { useMathContext } from "../../utils/GlobalState";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// By extending the React.Component class, Counter inherits functionality from it
function EquationBox() {
  // Setting the initial state of the Counter component
  const [state, dispatch] = useMathContext();

  let digits = []
  let userAnswer;
  let answer = state.numberOne + state.numberTwo;

  function getInputNo(answer) {
    digits = ("" + answer).split("")
  }

  function handleChange(e) {
    let index = e.target.dataset.indexNumber
    userAnswer = state.answers;
    userAnswer[index] = e.target.value;

    dispatch({
      type: "answer",
      answers: userAnswer,
    })
    console.log(state.answers);
  }

  getInputNo(answer);

  return (

    <div id="EQbox" className="jumbotron jumbotron-fluid text-center ">
      <div>
        <Row>
          <Col>
            +
          </Col>
          <Col>
            <Row className="number">
              {state.numberOne}
            </Row>
            <Row className="number">
              {state.numberTwo}
            </Row>
          </Col>
        </Row>
        <Row className="answerField">
              {digits.map((digit, index) => (
                <Col>
                  <Form.Control
                    size="lg"
                    type="text"
                    bsPrefix="answer"
                    maxlength="1"
                    data-index-number={[index]}
                    onChange={handleChange}
                    value={state.answers[[index]]}
                  />
                </Col>
              ))}
            </Row>
      </div>


    </div>


  );
}

export default EquationBox;
