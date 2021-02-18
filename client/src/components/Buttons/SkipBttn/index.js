import React, { useState, useEffect } from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../buttons.css';

function SkipBttn(props) {
    const [state] = useMathContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            closeModal();
        }, 4000);
        // I will be deleted while component is unmounting.
        return () => clearTimeout(timer)
    }, [props.show]);

    return (
        <div>
            <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'}
                {...props}
                onClick={() => {props.onClick()}
                }
            >
                skip
        </Button>
            <Modal size="sm"
                show={props.show}
                onHide={props.onHide}
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