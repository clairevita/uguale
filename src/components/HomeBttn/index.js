import React from "react";
import Button from "react-bootstrap/Button";
import './HomeBttn.css';

function HomeBttn() {

  return (

  <Button bsPrefix= "HomeBttn" onClick={event =>  window.location.href='/'}>
   Home
 </Button>
)}

export default HomeBttn;