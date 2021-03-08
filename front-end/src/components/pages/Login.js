import React from 'react';
import '../../App.css';
import LoginSection from '../LoginSection';
import LoginNavbar from '../LoginNavbar';
import Spotify from '../Spotify';

function Login() {
  return (
    <>
      <LoginNavbar />
      <LoginSection />
    </>
  );
}

export default Login;