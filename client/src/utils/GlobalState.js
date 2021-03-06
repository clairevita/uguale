import React, { useContext, createContext, useReducer, useEffect } from "react";

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
                wrongQuestions: action.wrongQuestions,
                answers: ["", "", "", "", "", "", "", ""],
                ans: action.ans
            };
        case "win":
            return {
                ...state,
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                answers: ["", "", "", "", "", "", "", ""],
                correctHistory: action.correctHistory,
                ans: action.ans
            };
        case "skip":
            return {
                ...state,
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                answers: ["", "", "", "", "", "", "", ""],
                ans: action.ans
            };
        case "answer":
            return {
                ...state,
                answers: action.answers,
            };
        case "profile":
            return { ...state, newUser: true };
        case "setEmail":
            return { 
                ...state, 
                email: action.email 
            };
        case "submitForm":
            return { ...state, 
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                newUser: false };
        case "returnUser": 
            return {
                ...state, 
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo,
                signedUp: action.signedUp,
                name: action.name,
                correctHistory: action.correctHistory,
                startDate: action.startDate
        }
        case "setCurrent":
            return {
                ...state,
                difficulty: action.difficulty,
                numberOne: action.numberOne,
                numberTwo: action.numberTwo
                // wrongQuestions: action.wrongQuestions

            }
        default:
            return state;
    };
}

const MathProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        difficulty: 2,
        numberOne: 2,
        numberTwo: 2,
        oldnumberOne: "",
        oldnumberTwo: "",
        answers: [],
        wrongQuestions: "",
        themeStyle: "mint",
        night: "",
        newUser: false,
        ans: "",
        email: "",
        name: "Guest",
        startDate: "Make an account to find out!",
        correctHistory: 0
    });
    return <Provider value={[state, dispatch]} {...props} />
};

const useMathContext = () => {
    return useContext(MathContext);
}

export { MathProvider, useMathContext, useEffect };