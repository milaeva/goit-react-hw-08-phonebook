import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '1053058699180-rjbu64pbbnr3glt31ten2uj7p4uv0jrn.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout Google"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export { Logout };
