import React, { useState } from 'react';
import { RecoMenuItems } from './RecoMenuItems';
import './RecoDropdown.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Selected from './Recommendations'

function RecoDropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [Recommendations, setReco] = useState([])
  const dropDownGenre = ['None', 'Pop', 'Rock', 'Country', 'Hip-Hop', 'Indie', 'Dance', 'Jazz', 'Blues', 'Metal']


  function recoGenres(e){
    let genre = e.target.value.toLowerCase();
    axios.get(`http://localhost:5000/recommendations/${genre}`).then(response => {
    setReco(response.data.tracks);
  });
}


  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {dropDownGenre.map((genre) => {
          return (
            <li>
              <a
                className='dropdown-link'
                onClick={() => setClick(false)}
              >
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RecoDropdown;