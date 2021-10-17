import { GoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from './refreshToken';
import s from './ButtonGoogleLogin.module.css';

const clientId =
  '1053058699180-rjbu64pbbnr3glt31ten2uj7p4uv0jrn.apps.googleusercontent.com';

const ButtonGoogleLogin = () => {
  const onSuccess = res => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = res => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`,
    );
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Log in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
      render={renderProps => (
        <button
          className={s.buttonGoogle}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div className={s.logoWrapper}>
            <img
              src="https://img.icons8.com/color/50/000000/google-logo.png"
              width="32"
              height="32"
              alt="logo google"
            />
          </div>
          Log in with Google
        </button>
      )}
    />
  );
};

export default ButtonGoogleLogin;
