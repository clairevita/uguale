import React, { useState } from "react";
import Modal from "react-modal";

function SkipModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2> Solution to the Eq. will go here</h2>
          <button onClick={() => setModalIsOpen(false)}> Close </button>
        </Modal>
  
      </div>
    )
  }
  
  export default SkipModal;