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
                to='/showplaylists'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Show Playlists
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recommendations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Check these!
              </Link>
            </li>
          </ul>
          {button && <Link to='/playlist'> <Button buttonStyle='btn--outline'>Create Your Playlist</Button></Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
