import React, { useState, useEffect } from 'react';
import './Artists.css';
import RecomItem from './RecomItems'
import axios from 'axios'

function Recommendations() {
  const [ArtistReco, setArtists] = useState([])
  const [TracksReco, setTracks] = useState([])
  const [Recommendations, setReco] = useState([])
  const [genres, setGenres] = useState([])
  
  let count = 1;

  useEffect(() => {
    axios.get('http://localhost:5000/artists').then(response => {
      setArtists(response.data.items);
    });
  }, [])

  const Artits_reco_id = ArtistReco.map(artist => {
    return artist.id;
  })

  useEffect(() => {
    axios.get('http://localhost:5000/tracks').then(response => {
      setTracks(response.data.items);
    });
  }, [])

  const Tracks_reco_id = TracksReco.map(track => {
    return track.id;
  })

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
            //console.log(first)
            return second[1] - first[1];
        });

        let itemsGenres = [];
        items.forEach(item => {
            itemsGenres.push(item[0]);
        });
        setGenres(itemsGenres)
    });
  }, []);

  function reco(artist, genres, tracks){
      axios.get(`http://localhost:5000/recommendations/${artist}/${genres}/${tracks}`).then(response => {
      setReco(response.data.tracks); 
    });
  }

  console.log(Recommendations)

  return (
    <div className='cards'>
      <h1>Recommended for you</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        {
          Recommendations.length === 0 ? (
          reco(Artits_reco_id[0], (genres.slice(0, 3).join()).replace(/ /g, "%20"), Tracks_reco_id[0])
          ):(
          <ul className='cards__items'>
          {
              Recommendations.map(reco => (
              <RecomItem
                src={reco.album.images[0].url}
                text={reco.name}
                path = {reco.external_urls.spotify} 
                label = {count++}
                text1 = {reco.album.artists[0].name}
                />
              ))
            }
          </ul>
          )}
        </div>
      </div> 
    </div> 
  );
}

export default Recommendations;
