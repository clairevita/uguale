import React from "react";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
// import Form from "react-bootstrap/Form"

function ThemeModal() {

  return (
    <div>
        <Row>
          <div className="btn-group">
            <Button className="btn btn-success">
              Berry Theme
            </Button>
            <Button className="btn btn-sucess">
              Classic Theme
            </Button>
          </div>
        </Row>
    </div>
  )
}

export default ThemeModal;


// onClick={() => })}        

// <Form>
//   {['checkbox', 'radio'].map((type) => (
//     <div key={`inline-${type}`} className="mb-3">
//       <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
//       <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
//       <Form.Check
//         inline
//         disabled
//         label="3 (disabled)"
//         type={type}
//         id={`inline-${type}-3`}
//       />
//     </div>
//   ))}
// </Form>
