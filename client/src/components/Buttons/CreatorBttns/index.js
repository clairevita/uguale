import React from "react";
import { useMathContext } from "../../../utils/GlobalState";
// import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import '../buttons.css';

function CreatorBttn(props) {
  const [state] = useMathContext();
  return (
    <div>
    <Row>
      <br/> <br/>
    </Row>
    <Row>
      <Col size="md-3">
      <Button bsPrefix={state.night + 'mint DashBttn'}>
      Roman Mazzei
      </Button>
      </Col>
      <br />
      <Col size="md-3">
    <Button bsPrefix={state.night + 'classic DashBttn'}>
      Claire Vita
      </Button>
      </Col>

      <br />
      <Col size="md-3">
      <Button bsPrefix={state.night + 'honey DashBttn'}>
      Deirdre Cruice
      </Button>
      </Col>
      <br />
      <Col size="md-3">
      <Button bsPrefix={state.night + 'berry DashBttn'}>
      Logan Morro
      </Button>
      </Col>
    </Row>
    </div>
  )
}

export default CreatorBttn;