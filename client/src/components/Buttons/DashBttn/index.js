import React from "react";
import { useMathContext } from "../../../utils/GlobalState";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../buttons.css';

function DashBttn(props) {
  const [state] = useMathContext();
  return (
    <Link to='/game'> 
      <Button bsPrefix={state.night + state.themeStyle + ' DashBttn'}>
      <i className="fa fa-pencil fa-fw"></i> <span>{props.wronganswer}</span>
      </Button>
    </Link>
  )
}

export default DashBttn;