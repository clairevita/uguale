import React, { useState, useEffect } from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import '../buttons.css';
import Modal from "react-bootstrap/Modal";

const SubmitBttn = (props) => {
    const [state, dispatch] = useMathContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onHide();
        }, 4000);
        // I will be deleted while component is unmounting.
        return () => clearTimeout(timer)
    }, [props.show]);

    return (
        <div>
            <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'}
                {...props}
                onClick={() => {
                    props.onClick();
                }}
            >
                submit
        </Button>
            <Modal size="sm"
                show={props.show}
                onHide={props.onHide}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Body className={state.night + state.themeStyle + 'main'}>
                    <h1> {state.ans} </h1>
                    {/* <h1>the answer was: </h1> */}
                    {/* <h1> {state.oldnumberOne + state.oldnumberTwo} </h1> */}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SubmitBttn;