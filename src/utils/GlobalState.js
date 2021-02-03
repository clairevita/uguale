import React, { createContext, useReducer, useContext } from "react";

const MathGeneration = createContext({
    difficulty: 1,
    numberOne: "",
    numberTwo: ""
});
const { Provider } = MathGeneration;

function reducer(state, action){
    switch (action.type){
        case "new":
            return [
                {
                    difficulty: 1,
                    numberOne: 1,
                    numberTwo: 2
                }
            ]

        default:
            return state;
    }

}

function MathProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
  
    return <Provider value={[state, dispatch]} {...props} />;
  }
  
  function useMathContext() {
    return useContext(MathGeneration);
  }
  
  export { MathProvider, useMathContext };