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
  let num1;
  let num2;

  if (state.numberOne >= state.numberTwo) {
    num1= state.numberOne;
    num2 = state.numberTwo;
  } else {
    num1= state.numberTwo;
    num2 = state.numberOne;
  }

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
          <Col xs={4} sm={4} md={4} lg="5" className="number">
            +
          </Col>
          <Col xs sm md lg="2">
            <Row className="number">
              {num1}
            </Row>
            <Row className="number">
              {num2}
            </Row>
          </Col>
        </Row>
        <div className="answerContainer">
        <Row className="answerField">
              {digits.map((digit, index) => (
                <Col className="formLoc">
                  <Form.Control
                    size="s"
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
    </div>
  );
}

export default EquationBox;
