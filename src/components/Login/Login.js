import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';


const clientId =`${process.env.REACT_APP_CLIENT_ID}`;

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully Welcome ${res.profileObj.name}!`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
        buttonText="Login"
      />
    </div>
  );
}

export default Login;

//   after 1 hour your tokenId gets expired and hence it won't be used to access data or authenticate users. so we need to generate new tokenId. To make things work we need to add some additional cases in the Login component.
// refreshTokenSetup function will take care of handling new tokenIds