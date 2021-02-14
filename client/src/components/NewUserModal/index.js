import React, { useState } from "react";
import { useMathContext } from "../../utils/GlobalState";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import { Col, Form, Row, Button } from "react-bootstrap";
import '../Buttons/buttons.css';
// import Form from "react-bootstrap/Form"

function NewUserModal() {
  const [state, dispatch] = useMathContext();
  const [modalIsOpen, setModalIsOpen] = useState(state.newUser);

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
                  />
                  <Form.Check
                    custom
                    inline
                    label="A loved one"
                    type="radio"
                    id={`custom-inline-radio-2`}
                  />
                </div>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Briefly describe your desired outcome:</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <Button variant="primary" type="submit">
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


