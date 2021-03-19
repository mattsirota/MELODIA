import React, { useState, useEffect } from 'react';
import './Artists.css';
import Artisttem from './ArtistItem';
import TrackItem from './TrackItem';
import axios from 'axios'

function Recommendations() {
  const [genres, setGenres] = useState([])
  let count = 1;

  useEffect(() => {
    axios.get('http://localhost:5000/artists').then(response => {
        let genres_count = {};
        response.data.items.map(artist => (
            artist.genres.map(genre => (
            genres_count[genre] = (genres_count[genre] || 0) + 1
            ))
        ))

        let items = Object.keys(genres_count).map(function(key) {
            return [key, genres_count[key]];
        }).sort(function(first, second) {
            return second[1] - first[1];
        });

        items.forEach(item => {
            setGenres(oldState => [...oldState, item[0]]);
        });
    });
  }, [])


  return (
    <div className='cards'>
      <h1>Recommended for you</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              <div>
                {genres.map((genre) => {
                  return <p>{genre}</p>;
                  // genres are generated in descending order
                  // after generating the recommendeded tracks, map them here with TrackItem
                })}
              </div>
              
            }
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Recommendations;
