import React from "react";
import { useMathContext } from "../../utils/GlobalState";
import "./style.css";

function Wrapper(props) {
  const [state] = useMathContext();

  return <main className={state.night + state.themeStyle + 'main wrapper'} {...props} />;

}

export default Wrapper;