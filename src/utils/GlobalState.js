import React, { useContext, createContext, useReducer } from "react";

const MathContext = createContext();
const { Provider } = MathContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "loss":
            return {};
        case "win":
            return {};
        case "skip":
            return {};
        default:
            return state;
    }
}

const MathProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        difficulty: 1,
        numberOne: 5,
        numberTwo: 1,
        themeStyle: "mint",
        night: ''
    });
    return <Provider value={[state, dispatch]} {...props} />
};

const useMathContext = () => {
    return useContext(MathContext);
}

 export { MathProvider, useMathContext };