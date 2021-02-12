import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import './NumberField.css'
import { useMathContext } from '../../utils/GlobalState';

function NumberField() {
    let digits = []
    let userAnswer;
    const [state, dispatch] = useMathContext();
    let answer = state.numberOne + state.numberTwo;
    
    function getInputNo(answer) {
        digits = ("" + answer).split("")
    }
    
    function handleChange(e){
        let index = e.target.dataset.indexNumber
        userAnswer = state.answers;
        userAnswer[index] = e.target.value;
        
        dispatch({
            type: "answer",
            answers: userAnswer,
 
        })
        console.log(state.answers);   
    }

    getInputNo(answer);
    return (
            <Form>
                <Form.Row>
                    {digits.map((digit, index) => (
                        <Col>
                            <Form.Control 
                            size="lg" 
                            type="text" 
                            bsPrefix="answer"
                            maxlength="1" 
                            data-index-number={[index]}
                            onChange={handleChange}
                            value={state.answers[[index]]}                     
                            />
                        </Col>
                    ))}
                </Form.Row>
            </Form>
        
    )
}

export {NumberField};