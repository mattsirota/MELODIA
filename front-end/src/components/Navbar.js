import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
              <Link
                to='/showplaylists'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Playlists
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
