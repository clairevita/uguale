import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import './NumberField.css'
import { useMathContext } from '../../utils/GlobalState';
function NumberField() {
    let digits = []
    const [state, dispatch] = useMathContext();
    let answer = state.numberOne + state.numberTwo;
    function getInputNo(answer) {
        digits = ("" + answer).split("")
        console.log(digits);
    }
    getInputNo(answer);
    return (
        
            <Form>
                <Form.Row>
                    {digits.map(digit => (
                        <Col>
                            <Form.Control size="lg" type="text" bsPrefix="answer"
                                maxlength="1" data={digit}
                            />
                        </Col>
                    ))}
                </Form.Row>
            </Form>
        
    )
}

export default NumberField;