import React, {useState, useEffect} from 'react';
import './Artists.css';
import Artisttem from './ArtistItem';
import axios from 'axios'

function Artists() {
  const [artists, setArtists] = useState([])
  let count = 1;
  useEffect(() => {
    axios.get('http://localhost:5000/artists').then(response => {
      setArtists(response.data.items);
      console.log(response.data.items);
    });
  }, [])

  return (
    <div className='cards'>
      <h1>Top Artists</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              artists.map(artist => (
              <Artisttem
                src={artist.images[0].url}
                text={artist.name}
                label={count++}
                path={artist.external_urls.spotify}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
  /*return (
    <div className='cards'>
      <h1>Top Artists</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Artisttem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/recents'
            />
            <Artisttem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/recents'
            />
          </ul>
          <ul className='cards__items'>
            <Artisttem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/recents'
            />
            <Artisttem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/tracks'
            />
            <Artisttem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/playlist'
            />
          </ul>
        </div>
      </div>
    </div>
  );*/
}

export default Artists;
