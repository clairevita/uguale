import React from 'react';
import { useGoogleLogin } from 'react-google-login';
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
    }).then(function(response) {
      if (response.data === "user already exists!"){
        console.log(response.data);
        API.getUser(res.profileObj.email).then((userInfo) => {
          console.log(userInfo.data);
        })
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
  function relocate(){
    history.push("/home");
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

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <>
    <button onClick={signIn} className="button">
      <img src="icons/logo.png" alt="google login" className="icon"></img>
      <span className="buttonText">Sign in with Google</span>
    </button>
    
  </>
  );
}

export default Login;

//   after 1 hour your tokenId gets expired and hence it won't be used to access data or authenticate users. so we need to generate new tokenId. To make things work we need to add some additional cases in the Login component.
// refreshTokenSetup function will take care of handling new tokenIds