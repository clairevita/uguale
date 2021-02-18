import React, { useState, useEffect } from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../buttons.css';

function SkipBttn(props) {
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
                onClick={() => {props.onClick()}
                }
            >
                skip
        </Button>
        </div>
    )
}

export default SkipBttn;