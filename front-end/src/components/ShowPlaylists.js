import React, { useState, useEffect } from 'react';
import './Artists.css';
import ShowPlaylistsItem from './ShowPlaylistsItem';
import axios from 'axios'

function ShowPlaylists() {
  const [items, setShowPlaylists] = useState([])
  let count = 1;
  useEffect(() => {
    axios.get('http://localhost:5000/showplaylists').then(response => {
      setShowPlaylists(response.data.items);
      console.log(response.data.items)
    });
  }, [])


  return (
    <div className='cards'>
      <h1>My Playlists</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              items === 0 ? (
                <p>Fetching your playlists!</p>
              ) : (
                items.map(items => (
                  <ShowPlaylistsItem
                    src={items.images[0].url}
                    text={items.name}
                    path={items.external_urls.spotify}
                  />
                )))
            }
          </ul>
        </div>
      </div>
    </div>
  );

}

export default ShowPlaylists;
