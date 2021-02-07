import React from "react";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { useMathContext } from "../../utils/GlobalState";
import '../Buttons/buttons.css';
// import Form from "react-bootstrap/Form"

function ThemeModal() {
  const [state, dispatch] = useMathContext();
  return (
    <div>
        <Row>
          <div className="btn-group inherit">
            <Button bsPrefix={state.night + state.themeStyle} onClick={() => dispatch({ type: "mint"})}>
              Mint Theme
            </Button>            
            <Button bsPrefix={state.night + state.themeStyle} onClick={() => dispatch({ type: "berry"})}> 
              Berry Theme
            </Button>
            <Button bsPrefix={state.night + state.themeStyle} onClick={() => dispatch({ type: "honey"})}>
              Honey Theme
            </Button>
            <Button bsPrefix={state.night + state.themeStyle} onClick={() => dispatch({ type: "classic"})}>
              Classic Theme
            </Button>
          </div>
        </Row>
        <br/>
        <Row>
          <div className="btn-group"> 
            <Button bsPrefix={state.night + state.themeStyle} onClick={() => dispatch({ type: "night"})}>
              Night Colors
            </Button>
            <Button bsPrefix={state.night + state.themeStyle} onClick={() => dispatch({ type: "light"})}>
              Light Colors
            </Button>
          </div>
        </Row>
    </div>
  )
}

export default ThemeModal;

// onClick={() => dispatch({ type: "remove", index })}
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
