import React, { useState } from "react";
import { useMathContext } from "../../../utils/GlobalState";
import ThemeModal from "../../ThemeModal/ThemeModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../buttons.css';


function ConfigBttn() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [state] = useMathContext();
  return (
    <div>
      <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'} onClick ={() => setModalIsOpen(true)}>
      <i className="fa fa-cog"></i> settings
      </Button>
      <Modal size="lg"
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Global Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ThemeModal/>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default ConfigBttn;


// size="lg" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}

// {/* <Modal
//         size="lg"
//         show={lgShow}
//         onHide={() => setLgShow(false)}
//         aria-labelledby="example-modal-sizes-title-lg"
//       > */}
//         {/* <Modal.Header closeButton>
//           <Modal.Title id="example-modal-sizes-title-lg">
//             Large Modal
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>...</Modal.Body>
//       </Modal> */}



      //   {/* <Wrapper>
      //     <ThemeModal />
      //   </Wrapper>
      //   <button onClick={() => setModalIsOpen(false)}> Close </button>
      // </Modal> */}