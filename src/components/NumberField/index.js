import React from "react";
import Form from 'react-bootstrap/Form';
import './NumberField.css'

function NumberField() {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control size="lg" type="text" bsPrefix="answer" 
                    maxlength="1"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default NumberField;