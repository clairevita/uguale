import React from "react";
import Button from "react-bootstrap/Button";

function ThemeModal() {

  return (
    <div className="btn-group">
      <Button onClick={() => props.setThemeState({ ...themeState, stylePath: "../berrytheme.css" })} className="btn btn-success">
        Berry Theme
        </Button>
      <Button onClick={() => setThemeState({ ...themeState, stylePath: "../default.css" })} className="btn btn-danger">
        Classic Theme
        </Button>
    </div>
  )
}

export default ThemeModal;

