import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function StartBttn() {
  return (
  <Button variant="contained" color="secondary" className="HomeButton" onClick={event =>  window.location.href='/game'}>
      Start
 </Button>
)}

export default StartBttn;