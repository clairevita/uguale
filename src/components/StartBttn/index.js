import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function StartBttn() {
  return (
  <Button variant="contained" color="secondary" className="HomeButton">
      <Link className="navbar-brand" to="/game">
        Start
      </Link>
 </Button>
)}

export default StartBttn;