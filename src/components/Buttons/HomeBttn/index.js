import React from "react";
import { useMathContext } from "../../../utils/GlobalState";
import Button from "react-bootstrap/Button";
import '../buttons.css';

function HomeBttn() {
  const [state] = useMathContext();
  return (
    <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'} onClick={event => window.location.href = '/'}>
    <i className="fa fa-home"></i> home
    </Button>
  )
}

export default HomeBttn;