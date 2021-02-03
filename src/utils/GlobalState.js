import React, { createContext, useReducer, useContext } from "react";

const MathGeneration = createContext({
    difficulty = 1,
    numberOne = "",
    numberTwo = ""
});
const { Provider } = MathGeneration;

function reducer(state, action){

}

function MathProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
  
    return <Provider value={[state, dispatch]} {...props} />;
  }
  
  function useMathContext() {
    return useContext(MathGeneration);
  }
  
  export { MathProvider, useMathContext };