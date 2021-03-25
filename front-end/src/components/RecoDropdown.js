  
import React, { useState } from 'react';
import { RecoMenuItems } from './RecoMenuItems';
import './RecoDropdown.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Selected from './Recommendations'

function RecoDropdown() {
  const [click, setClick] = useState(false);
  const [Recommendations, setReco] = useState([])
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {RecoMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href = {'/recommendations'+ item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RecoDropdown;