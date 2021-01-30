import React, { useState } from "react";
// import ConfigBttn from "../ConfigBttn/index";
import "./style.css";

function Wrapper(props) {
  const [themeState, setThemeState] = useState({
    theme: "default",
  });
  
  return <main className={themeState.theme} {...props} />;
}

export default Wrapper;




    // <button onClick={() => setThemeState({ ...themeState, theme: "inverse" })} className="btn btn-info">
    //   INVERSE COLORS
    // </button>