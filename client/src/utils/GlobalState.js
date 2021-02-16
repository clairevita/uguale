import React, { useContext, createContext, useReducer } from "react";

const MathContext = createContext();
const { Provider } = MathContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "mint":
            return { ...state, themeStyle: "mint" };
        case "berry":
            return { ...state, themeStyle: "berry" };
        case "honey":
            return { ...state, themeStyle: "honey" };
        case "classic":
            return { ...state, themeStyle: "classic" };
        case "night":
            return { ...state, night: "night" };
        case "light":
            return { ...state, night: "" };
        case "loss":
            return {
                ...state,
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                answers: ["", "", "", "", "", "", "", ""]
            };
        case "win":
            return {
                ...state,
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                answers: ["", "", "", "", "", "", "", ""]
            };
        case "skip":
            return {
                ...state,
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                answers: ["", "", "", "", "", "", "", ""]
            };
        case "answer":
            return {
                ...state,
                answers: action.answers,
            };
        case "profile":
            return { ...state, newUser: true };
        case "email":
            return { 
                ...state, 
                email: action.email 
            };
        default:
            return state;
    };
}

const MathProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        difficulty: 2,
        numberOne: 2,
        numberTwo: 2,
        answers: [],
        themeStyle: "mint",
        night: "",
        newUser: false,
        email: ""
    });
    return <Provider value={[state, dispatch]} {...props} />
};

const useMathContext = () => {
    return useContext(MathContext);
}

export { MathProvider, useMathContext };