import React from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import '../buttons.css';

const SkipBttn = (props) => {
    const [state] = useMathContext();
    return (
        <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'}
        {...props}
        >
            submit
        </Button>
    )
}

export default SkipBttn;