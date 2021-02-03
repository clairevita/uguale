import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import './configBttn.css';

function ConfigBttn() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <Button bsPrefix="ConfigBttn" onClick ={() => setModalIsOpen(true)}>
        config
 </Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2> Theme values will go here</h2>
        <p> Theme</p>
        <p> Theme</p>
        <p> Theme</p>

        <button onClick={() => setModalIsOpen(false)}> Close </button>
      </Modal>

    </div>
  )
}

export default ConfigBttn;