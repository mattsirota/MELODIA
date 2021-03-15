import React, { useState, useEffect } from 'react';
import './Artists.css';
import Artisttem from './ArtistItem';
import axios from 'axios'

function Recents() {
  const [items, setRecents] = useState([])
  let count = 1;
  useEffect(() => {
    axios.get('http://localhost:5000/recents').then(response => {
      setRecents(response.data.items);
      console.log(response.data.items)
    });
  }, [])


  return (
    <div className='cards'>
      <h1>Recent Tracks</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              items === 0 ? (
                <p>Fetching your recent tracks!</p>
              ) : (
                  items.map(items => (
                    <Artisttem
                      src={items.track.album.images[0].url}
                      text={items.track.name}
                      text1={items.track.album.artists[0].name}
                      label={count++}
                      path={items.track.external_urls.spotify} target="_blank"
                    />
                  )))
            }
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Recents;
