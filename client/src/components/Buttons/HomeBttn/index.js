import React from "react";
import { useMathContext } from "../../../utils/GlobalState";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../buttons.css';

function HomeBttn() {
  const [state] = useMathContext();
  return (
    <Link to="/home">
      <Button bsPrefix={state.night + state.themeStyle + ' MenuBttn'}>
        <i className="fa fa-home"></i> home
    </Button>
    </Link>
  )
}

export default HomeBttn;