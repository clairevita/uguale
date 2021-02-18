import React from 'react';
import { GoogleLogin } from 'react-google-login';
import "./login.css";
import { useMathContext } from "../../utils/GlobalState"
import API from '../../utils/API';
import { useHistory } from 'react-router'
const clientId =
  '632745579079-uigk4jq1cgb2ueci500k91s4ip6gellc.apps.googleusercontent.com';

function Login() {
  const [state, dispatch] = useMathContext();
  const history = useHistory();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    API.signup({
      email: res.profileObj.email,
      profileImage: res.profileObj.imageUrl,
      name: res.profileObj.name,
    }).then(function (response) {
      if (response.data === "user already exists!") {
        console.log("")
      } else {
        dispatch({
          type: "profile",
          newUser: true
        })
        relocate();
      }
    })
    dispatch({
      type: "setEmail",
      email: res.profileObj.email
    });
    console.log(state);
    // This function keeps refreshing the signin. Since we're just using their email let's see how the app functions with out it.
    // refreshTokenSetup(res);
  };
  function relocate() {
    history.go(0)
  }
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    dispatch({
      type: "setEmail",
      email: "Guest"
    });
    console.log(
      `Failed to login`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

//   after 1 hour your tokenId gets expired and hence it won't be used to access data or authenticate users. so we need to generate new tokenId. To make things work we need to add some additional cases in the Login component.
// refreshTokenSetup function will take care of handling new tokenIds