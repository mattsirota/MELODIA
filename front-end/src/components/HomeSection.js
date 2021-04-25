import React, { useState, useEffect } from 'react';
import '../App.css';
import './HomeSection.css';
import axios from 'axios';

function HomeSection() {
  const [name, setName] = useState("")

  useEffect(() => {
    axios.get('http://localhost:5000/profile', {withCredentials: true}).then(response => {
      console.log(response)
      setName(response.data.display_name);
      console.log(response.data.display_name);
    });
  })
  
  return (
    <div className='hero-container'>
      <video src='/videos/melodia1.mp4' autoPlay loop muted />
      <h1>Welcome, {name}!</h1>

    </div>
  );
}

export default HomeSection;
