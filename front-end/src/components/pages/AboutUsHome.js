import React from 'react';
import '../../App.css';
import './AboutUs.css'
import Navbar from '../Navbar';

function AboutUs() {
    return (
      <> <Navbar />
        <div className='AboutUs-container'>
          <section className='AboutUs-subscription'>
            <p className='AboutUs-subscription-heading'>
            How Melodia Works
            </p>
            
                <div className='AboutUs'>
                  <p className='AboutUs-description'>
                   Melodia is a web application that allows users to view their Spotify data such as top artists and songs over varying periods of time as well as recently played tracks. This information will be made available to the users in a clean user interface that spans across pages that display artists, songs, and profile information. We will also create playlists based on this user data obtained directly from Spotify.</p>
                Our project will provide an amazing opportunity for the user to listen to their favorite songs all over again and even discover new music similar to the music they already love and listen to. Our project’s goal is to provide valuable insight to users about their Spotify listening history and give them a way to interact with this information.
       
        </div>
        </section>
    </div>   
    </>
    );
}

export default AboutUs;