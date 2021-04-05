import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          What do you think of Melodia ?
        </p>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'> Survey </Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/aboutus_home'>How it works</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/home' className='social-logo'>
              MELODIA
            </Link>
          </div>
          <small class='website-rights'>MELODIA © 2021</small>
          <div class='social-icons'>
            <a href="https://www.spotify.com/us/"
              class='social-icon-link Spotify'
              to='/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Spotify'
            >
              <i class='fab fa-spotify' />
            </a>
            <a href="https://github.com/mattsirota/MELODIA"
              class='social-icon-link Github'
              to='/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
