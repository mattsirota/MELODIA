import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';

function LoginSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/melodia1.mp4' autoPlay loop muted />
      <h1>MUSIC IS LIFE</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          What's this?
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN IN WITH SPOTIFY <i className='fab fa-spotify' />
        </Button>
      </div>
    </div>
  );
}

export default LoginSection;
