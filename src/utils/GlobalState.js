import React, { useContext, createContext, useReducer } from "react";

const MathContext = createContext();
const { Provider } = MathContext;

// const reducer = (state, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

const reducer = (state, action) => {
    switch (action.type) {
        case "mint":
            return { ...state, themeStyle: "mint"};
        case "berry":
            return { ...state, themeStyle: "berry"};
        case "honey":
            return { ...state, themeStyle: "honey"};
        case "classic":
            return { ...state, themeStyle: "classic"};
        case "night":
            return { ...state, night: "night"};
        case "light":
            return { ...state, night: ""};
        default:
            return state;
    }; 
}

const MathProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        difficulty: 1,
        numberOne: 5,
        numberTwo: 1,
        themeStyle: "mint",
        night: ""
    });
    return <Provider value={[state, dispatch]} {...props} />
};

const useMathContext = () => {
    return useContext(MathContext);
}

export { MathProvider, useMathContext };