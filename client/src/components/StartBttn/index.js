import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./StartBttn.css";

function StartBttn() {
  return (
  <Link to='/game'>
    <Button variant="contained" color="secondary" bsPrefix="StartBttn">
      start
    </Button>
  </Link>
  
)}

export default StartBttn;