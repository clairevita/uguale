import React from 'react';
import { GoogleLogout } from 'react-google-login';


const clientId =
  `632745579079-uigk4jq1cgb2ueci500k91s4ip6gellc.apps.googleusercontent.com`;

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;