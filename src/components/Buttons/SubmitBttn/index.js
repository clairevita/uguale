import React from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import '../buttons.css';

const SkipBttn = (props) => {
    const [state] = useMathContext();
    return (
        <Button id="submitBttn" bsPrefix={state.night + state.themeStyle + ' MenuBttn'}
        {...props}
        >
            SUBMIT
        </Button>
    )
}

export default SkipBttn;