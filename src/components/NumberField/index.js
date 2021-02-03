import React from "react";
import Form from 'react-bootstrap/Form';
function NumberField() {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text"/>
                </Form.Group>
            </Form>
        </div>
    )
}

export default NumberField;