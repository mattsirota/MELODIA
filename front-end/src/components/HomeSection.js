import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';

function HomeSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/melodia1.mp4' autoPlay loop muted />
      <h1>Welcome, Ejona!</h1>

    </div>
  );
}

export default HomeSection;
