import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { useMathContext } from "../../utils/GlobalState";
import "./thememodal.css";
import Logout from "../Logout/Logout.js";
import Login from "../Login/Login.js";

// import Form from "react-bootstrap/Form"

function ThemeModal() {
  const [state, dispatch] = useMathContext();
  return (
    <div>
      <br></br>
      <Row>
        <br></br><br></br>

        <Col size="md-3">
          <Button bsPrefix={state.night + "mint" + ' themebttn'} onClick={() => dispatch({ type: "mint" })}>
            mint theme
            </Button> 
        </Col>

        <Col size="md-3">
          <Button bsPrefix={state.night + "berry" + ' themebttn'} onClick={() => dispatch({ type: "berry" })}>
          berry theme            
          </Button>
        </Col>
        
        <Col size="md-3">
          <Button bsPrefix={state.night + "honey" + ' themebttn'} onClick={() => dispatch({ type: "honey" })}>
          honey theme    
         </Button>
        </Col>
        
        <Col size="md-3">
          <Button bsPrefix={state.night + "classic" + ' themebttn'} onClick={() => dispatch({ type: "classic" })}>
          chalk theme
          </Button>
        </Col>
      
      </Row>
   
      <Row>
        <Col size="md-3" align="center">
              <Button bsPrefix={"" + state.themeStyle + ' lightdarkbttn'} onClick={() => dispatch({ type: "night" })}>
                Night Colors
              </Button>
        </Col>
        <Col size="md-3" align="center">
          <Button bsPrefix={"night" + state.themeStyle + ' lightdarkbttn'} onClick={() => dispatch({ type: "light" })}>
                Light Colors
              </Button>
        </Col>

      </Row>
      <br></br>

      <Row>
        <Col size="md-12">
          <div className="googleButtons">
            <Login />
            <Logout />
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <Link to="/user">
            <Button bsPrefix={state.night + state.themeStyle + ' themebttn'}>
              USER DASHBOARD
            </Button>          
          </Link>
        </Col>
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
