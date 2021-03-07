import React, {useState, useEffect} from 'react';
import './Artists.css';
import ArtistItem from './ArtistItem';
import axios from 'axios'

function Artists() {


  const [artists, setArtists] = useState([])

  function getArtistsByTimeRange(range) {
    axios
        .get("http://localhost:5000/artists/" + range)
        .then(res => {
            setArtists(res.data.items)
          }
        )
  }
  
  useEffect(() => {
      axios
        .get("http://localhost:5000/artists")
        .then(res => {
            setArtists(res.data.items)
          }
        )
  }, [])

  return (
    <div className='cards'>
      <h1>Top Artists</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ArtistItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/recents'
            />
            <ArtistItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/tracks'
            />
            <ArtistItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/playlist'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Artists;
