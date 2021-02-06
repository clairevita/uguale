import React from 'react';
import { GoogleLogout } from 'react-google-login';


const clientId =
  `${process.env.REACT_APP_CLIENT_ID}`;

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