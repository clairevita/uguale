import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import './NumberField.css'
import { useMathContext } from '../../utils/GlobalState';

function NumberField() {
    let digits = []
    let userAnswer;
    let proxyAnswer = [];
    const [state, dispatch] = useMathContext();
    let answer = state.numberOne + state.numberTwo;
    
    function getInputNo(answer) {
        digits = ("" + answer).split("")
        console.log(digits);
    }
    
    function handleChange(e){
        
        userAnswer = state.answers;
        userAnswer.splice(e.target.data, 1, e.target.value);
        console.log(userAnswer);
        
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
                            data={[index]}
                            onChange={handleChange}
                            
                            />
                        </Col>
                    ))}
                </Form.Row>
            </Form>
        
    )
}

export {NumberField};