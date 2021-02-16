import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import "./login.css";
import { useMathContext } from "../../utils/GlobalState"
import API from '../../utils/API';

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';
import NewUserModal from '../NewUserModal';



const clientId =
  '632745579079-uigk4jq1cgb2ueci500k91s4ip6gellc.apps.googleusercontent.com';

function Login() {
  const [state, dispatch] = useMathContext();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    API.signup({
      email: res.profileObj.email,
      profileImage: res.profileObj.imageUrl,
      name: res.profileObj.name,
    });
    dispatch({
      type: "setEmail",
      email: res.profileObj.email
  });
  console.log(state);
    refreshTokenSetup(res);

  };

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
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/logo.png" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
      <NewUserModal />
    </button>
  );
}

export default Login;

//   after 1 hour your tokenId gets expired and hence it won't be used to access data or authenticate users. so we need to generate new tokenId. To make things work we need to add some additional cases in the Login component.
// refreshTokenSetup function will take care of handling new tokenIds