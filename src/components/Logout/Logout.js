import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import "./logout.css";

const clientId =
  '632745579079-uigk4jq1cgb2ueci500k91s4ip6gellc.apps.googleusercontent.com';

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/logo.png" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default Logout;