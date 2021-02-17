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

  function handleFormSubmit() {
    console.log(form);
    console.log(form.age);
  }
  
  const [form, setState] = useState({
    age: "",
    technicalAssistance: "",
    outcome: ""
  })
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
              <Form.Row>
                <div key={`custom-inline-radio`} className="mb-3">
                  <Form.Check
                    custom
                    inline
                    label="Myself"
                    type="radio"
                    id={`custom-inline-radio-1`}
                    name="mySelf"
                    onChange={e => setState({technicalAssistance: e.target.name})}
                  />
                  <Form.Check
                    custom
                    inline
                    label="A Loved One"
                    type="radio"
                    id={`custom-inline-radio-2`}
                    name="lovedOne"
                    onChange={e => setState({technicalAssistance: e.target.name})}
                  />
                  <Form.Check
                    custom
                    inline
                    label="A Student"
                    type="radio"
                    id={`custom-inline-radio-2`}
                    name="aStudent"
                    onChange={e => setState({technicalAssistance: e.target.name})}
                  />
                </div>
              </Form.Row>
              <Form.Label>Please Enter Your Current Age</Form.Label>
              <Form.Row>
                <Col xs="9">
                  <RangeSlider
                    value={0}
                    onChange={e => setState({age: e.target.value})}
                  />
                </Col>
                <Col xs="3">
                  <Form.Control value={0} />
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Briefly describe your desired outcome:</Form.Label>
                <Form.Control as="textarea"
                  rows={2}
                  name="outcome"
                  onChange={e => setState({outcome: e.target.value})}
                />
              </Form.Group>

              <Button variant="primary"
                type="submit"
                onClick={() => {
                  handleFormSubmit();
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


