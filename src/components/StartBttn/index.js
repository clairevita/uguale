import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./StartBttn.css";

function StartBttn() {
  return (
  <Button variant="contained" color="secondary" className="StartButton" onClick={event =>  window.location.href='/game'}>
      Start
 </Button>
)}

export default StartBttn;