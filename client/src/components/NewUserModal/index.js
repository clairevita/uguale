import React, { useState } from "react";
import { useMathContext } from "../../utils/GlobalState";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import RangeSlider from 'react-bootstrap-range-slider';
import { Col, Form, Row, Button } from "react-bootstrap";
import '../Buttons/buttons.css';
import Curr from '../../utils/Curr';
import API from '../../utils/API';

function NewUserModal() {
  const [state, dispatch] = useMathContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setState] = useState({
    age: 50,
    technicalAssistance: false,
    outcome: ""
  })
  function handleFormSubmit(e) {
    e.preventDefault();
    let modDifficulty;
    let newMath;
    if (form.age > 13 && form.age < 20) {
      modDifficulty = 50;
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    } else if (form.age > 19 && form.age < 46) {
      modDifficulty = 200;
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    } else if (form.age > 45 && form.age < 60) {
      modDifficulty = 100;
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    } else {
      modDifficulty = 2
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    }

    sendStats(modDifficulty, newMath[1], newMath[2]);

  }

  function sendStats(difficulty, numberOne, numberTwo) {
    dispatch({
      type: "submitForm",
      difficulty: difficulty,
      numberOne: numberOne,
      numberTwo: numberTwo,
      newUser: false
    });
    console.log(state)
    let numbers = numberOne + "," + numberTwo
    API.newuserInfo({
      email: state.email,
      difficulty: difficulty,
      lastIntegers: numbers,
      age: form.age,
      technicalAssistance: form.technicalAssistance,
      outcome: form.outcome
    })
    // setModalIsOpen(false);
  }
  return (
    <div>
      <Modal size="lg"
        backdrop="static"
        keyboard={false}
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header className={state.night + state.themeStyle + 'header'}>
          <Modal.Title id="example-modal-sizes-title-lg">
            Welcome! Please create your profile:
                    </Modal.Title>
        </Modal.Header>
        <Modal.Body className={state.night + state.themeStyle + 'main'}>
          <Container>
            <Form>
              <Form.Row>
                <Form.Label>Who is this application for:</Form.Label>
              </Form.Row>
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={2}>
                    Radios
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Myself"
                      name="who"
                      id="formHorizontalRadios1"
                      onChange={e => setState({
                        age: form.age,
                        technicalAssistance: false,
                        outcome: form.outcome
                      })}
                    />
                    <Form.Check
                      type="radio"
                      label="A Loved One"
                      name="who"
                      id="formHorizontalRadios2"
                      onChange={e => setState({
                        age: form.age,
                        technicalAssistance: true,
                        outcome: form.outcome
                      })}
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Label>Please Enter Your Current Age</Form.Label>
              <Form.Row>
                <Form.Label>Range</Form.Label>
                <Col xs="9">
                  <RangeSlider
                    min={4}
                    max={100}
                    size='lg'
                    value={form.age}
                    onChange={e => setState({
                      age: e.target.value,
                      technicalAssistance: form.technicalAssistance,
                      outcome: form.outcome
                    })}
                  />
                </Col>
                <Col xs="2">
                  <Form.Control value={form.age} />
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Briefly describe your desired outcome:</Form.Label>
                <Form.Control as="textarea"
                  rows={2}
                  name="outcome"
                  onChange={e => setState({
                    age: form.age,
                    technicalAssistance: form.technicalAssistance,
                    outcome: e.target.value
                  })}
                />
              </Form.Group>

              <Button variant="primary"
                type="submit"
                onClick={event => {
                  handleFormSubmit(event);
                }}
              >
                Submit
              </Button>

            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewUserModal;

// onClick={() => dispatch({ type: "remove", index })}
// onClick={() => })}        

// <Form>
//   {['checkbox', 'radio'].map((type) => (
//     <div key={`inline-${type}`} className="mb-3">
//       <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
//       <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
//       <Form.Check
//         inline
//         disabled
//         label="3 (disabled)"
//         type={type}
//         id={`inline-${type}-3`}
//       />
//     </div>
//   ))}
// </Form>


