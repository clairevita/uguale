import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import "./login.css";
import { useMathContext } from "../../utils/GlobalState"
import API from '../../utils/API';
import { useHistory } from 'react-router';
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import RangeSlider from 'react-bootstrap-range-slider';
import { Col, Form, Row, Button } from "react-bootstrap";
import '../Buttons/buttons.css';
import Curr from '../../utils/Curr';

const clientId =
  '632745579079-uigk4jq1cgb2ueci500k91s4ip6gellc.apps.googleusercontent.com';

function Login() {
  const [state, dispatch] = useMathContext();
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setState] = useState({
    age: 50,
    technicalAssistance: false,
    outcome: ""
  })
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    API.signup({
      email: res.profileObj.email,
      profileImage: res.profileObj.imageUrl,
      name: res.profileObj.name,
    }).then(function (response) {
      console.log(response.data);
      setModalIsOpen(false);
      if (response.data.response == "returning") {
        let numberOne;
        let numberTwo;
        if (response.data.data.lastIntegers) {
          let splitResponse = response.data.data.lastIntegers.split(",");
          console.log(splitResponse);
          numberOne = splitResponse[0];
          console.log(numberOne);
          numberTwo = splitResponse[1];
          console.log(numberTwo);
        } else {
          numberOne = Math.ceil(Math.random() * response.data.datadifficulty);
          numberTwo = Math.ceil(Math.random() * response.data.data.difficulty);
        }
        dispatch({
          type: "returnUser",
          difficulty: response.data.data.difficulty,
          numberOne: numberOne,
          numberTwo: numberTwo
        });
      } else if (!response.data.response){
        modalOpen();
      }
    })
    dispatch({
      type: "setEmail",
      email: res.profileObj.email
    });
    // This function keeps refreshing the signin. Since we're just using their email let's see how the app functions with out it.
    // refreshTokenSetup(res);
  };

  function modalOpen() {
    setModalIsOpen(true);
  }
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    dispatch({
      type: "setEmail",
      email: "Guest"
    });
    alert(
      `Failed to login`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    let modDifficulty;
    let newMath;
    if (form.age > 13 && form.age < 20) {
      modDifficulty = 50;
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    } else if (form.age > 19 && form.age < 46) {
      modDifficulty = 200;
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    } else if (form.age > 45 && form.age < 60) {
      modDifficulty = 100;
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    } else {
      modDifficulty = 2
      newMath = Curr.equationSkip(modDifficulty);
      console.log(newMath[0] + "  NumberOne:" + newMath[1] + "  NumberTwo" + newMath[2]);
    }
    sendStats(modDifficulty, newMath[1], newMath[2]);
    setModalIsOpen(false);
  }

  function sendStats(difficulty, numberOne, numberTwo) {
    dispatch({
      type: "submitForm",
      difficulty: difficulty,
      numberOne: numberOne,
      numberTwo: numberTwo,
      newUser: false
    });
    console.log(state)
    let numbers = numberOne + "," + numberTwo
    API.newuserInfo({
      email: state.email,
      difficulty: difficulty,
      lastIntegers: numbers,
      age: form.age,
      technicalAssistance: form.technicalAssistance,
      outcome: form.outcome
    })
  }
  return (
    <>
      <button onClick={signIn} className="button">
        <img src="icons/logo.png" alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>

      <div>
        <Modal size="lg"
          backdrop="static"
          keyboard={false}
          show={modalIsOpen}
          onHide={() => setModalIsOpen(false)}
          aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header className={state.night + state.themeStyle + 'header'} closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Welcome! Please create your profile:
                  </Modal.Title>
          </Modal.Header>
          <Modal.Body className={state.night + state.themeStyle + 'main'}>
            <Container>
              <Form>
                <Form.Row>
                  <Form.Label>Who is this application for:</Form.Label>
                </Form.Row>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                      Radios
                </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Myself"
                        name="who"
                        id="formHorizontalRadios1"
                        onChange={e => setState({
                          age: form.age,
                          technicalAssistance: false,
                          outcome: form.outcome
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="A Loved One"
                        name="who"
                        id="formHorizontalRadios2"
                        onChange={e => setState({
                          age: form.age,
                          technicalAssistance: true,
                          outcome: form.outcome
                        })}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Label>Please Enter Your Current Age</Form.Label>
                <Form.Row>
                  <Form.Label>Range</Form.Label>
                  <Col xs="9">
                    <RangeSlider
                      value={form.age}
                      onChange={e => setState({
                        age: e.target.value,
                        technicalAssistance: form.technicalAssistance,
                        outcome: form.outcome
                      })}
                    />
                  </Col>
                  <Col xs="3">
                    <Form.Control value={form.age} />
                  </Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Briefly describe your desired outcome:</Form.Label>
                  <Form.Control as="textarea"
                    rows={2}
                    name="outcome"
                    onChange={e => setState({
                      age: form.age,
                      technicalAssistance: form.technicalAssistance,
                      outcome: e.target.value
                    })}
                  />
                </Form.Group>

                <Button variant="primary"
                  type="submit"
                  onClick={event => {
                    handleFormSubmit(event);
                  }}
                >
                  Submit
            </Button>

              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
export default Login;

//   after 1 hour your tokenId gets expired and hence it won't be used to access data or authenticate users. so we need to generate new tokenId. To make things work we need to add some additional cases in the Login component.
// refreshTokenSetup function will take care of handling new tokenIds