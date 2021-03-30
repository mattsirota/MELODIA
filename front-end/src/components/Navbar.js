import React, { useState, useEffect } from 'react';
import { Button, playlistButton } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            MELODIA
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tracks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tracks
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recents'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recents
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recommendations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recommended
              </Link>
            </li>
            <li className='nav-item'>
              <a href='https://www.Spotify.com/us/logout'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
