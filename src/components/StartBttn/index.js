import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./StartBttn.css";

function StartBttn() {
  return (
  <Button variant="contained" color="secondary" bsPrefix="StartBttn" onClick={event =>  window.location.href='/game'}>
      start
 </Button>
)}

export default StartBttn;