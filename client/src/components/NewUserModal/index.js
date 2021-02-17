import React, { useState } from "react";
import { useMathContext } from "../../utils/GlobalState";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import RangeSlider from 'react-bootstrap-range-slider';
import { Col, Form, Row, Button } from "react-bootstrap";
import '../Buttons/buttons.css';
// import Form from "react-bootstrap/Form"

function NewUserModal() {
  const [state, dispatch] = useMathContext();
  const [modalIsOpen, setModalIsOpen] = useState(state.newUser);
  const [form, setState] = useState({
    age: 50,
    technicalAssistance: "",
    outcome: ""
  })

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(form);
  }


  return (
    <div>
      <Modal size="lg"
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header className={state.night + state.themeStyle + 'header'} closeButton>
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
                      name="Myself"
                      id="formHorizontalRadios1"
                      onChange={e => setState({ technicalAssistance: e.target.name })}
                    />
                    <Form.Check
                      type="radio"
                      label="A Loved One"
                      name="A Loved One"
                      id="formHorizontalRadios2"
                      onChange={e => setState({ technicalAssistance: e.target.name })}
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Label>Please Enter Your Current Age</Form.Label>
              <Form.Row>
                <Form.Label>Range</Form.Label>
                <Col xs="9">
                  <RangeSlider
                    value={form.age}
                    onChange={e => setState({age: e.target.value})}
                  />
                </Col>
                <Col xs="3">
                  <Form.Control value={form.age} />
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Briefly describe your desired outcome:</Form.Label>
                <Form.Control as="textarea"
                  rows={2}
                  name="outcome"
                  onChange={e => setState({ outcome: e.target.value })}
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


