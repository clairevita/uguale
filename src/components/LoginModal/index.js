import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

// import { useMathContext } from "../../utils/GlobalState";
// import '../Buttons/buttons.css';
// import Form from "react-bootstrap/Form"

function LoginModal() {
  // const [state, dispatch] = useMathContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  setModalIsOpen(true);

  return (
    <div>
    <Modal size="lg"
      show={modalIsOpen}
      onHide={() => setModalIsOpen(false)}
      aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Welcome user!
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <LoginModal />
        </Container>
      </Modal.Body>
    </Modal>

        <Row>
            <Col size="md-6">
            <Button >
              Mint Theme
            </Button>            
            <Button > 
              Berry Theme
            </Button>
            </Col>
            <Col size="md-6">
            <Button >
              Honey Theme
            </Button>
            <Button >
              Classic Theme
            </Button>
            </Col>
        
        </Row>
        <br/>
        <Row>
          <div className="btn-group"> 
            <Button >
              Night Colors
            </Button>
            <Button >
              Light Colors
            </Button>
          </div>
        </Row>
    </div>
  )
}

export default LoginModal;