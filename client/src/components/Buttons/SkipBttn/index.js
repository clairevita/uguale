import React, { useState, useEffect } from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../buttons.css';

function SkipBttn(props){
    const [state] = useMathContext();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function closeModal() {
        return (
         setModalIsOpen(false)
        )
      };

      useEffect(() => {
        const timer = setTimeout(() => {
         closeModal();
        }, 4000);
        // I will be deleted while component is unmounting.
        return () => clearTimeout(timer) 
        }, [modalIsOpen]);

    return (
        <div>
        <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'}
        {...props} onClick ={() => setModalIsOpen(true)}
        >
            skip
        </Button>
        <Modal size="sm"
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Body className={state.night + state.themeStyle + 'main'}>
              <h1> You are doing great, keep going </h1>
              <p>the answer was:</p>
           {state.numberOne + state.numberTwo}
          </Modal.Body>
      </Modal>
        </div>
    )
}

export default SkipBttn;