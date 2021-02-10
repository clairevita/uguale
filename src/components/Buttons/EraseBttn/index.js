import React from 'react';
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import '../buttons.css';

function EraseBttn(props){
    const [state] = useMathContext();
    return (
        <Button 
        {...props}
        bsPrefix={state.night + state.themeStyle + ' MenuBttn'}
        >
            erase
        </Button>
    )
}

export default EraseBttn;