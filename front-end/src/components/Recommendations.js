import React, { useState, useEffect } from 'react';
import './Artists.css';
import RecomItem from './RecomItems'
import axios from 'axios'
import RecoDropdown from './RecoDropdown'
import { Link } from 'react-router-dom'

function Recommendations() {
  const [ArtistReco, setArtists] = useState([])
  const [TracksReco, setTracks] = useState([])
  const [Recommendations, setReco] = useState([])
  const [genres, setGenres] = useState([])
  const [selected, setSelected] = useState([])
  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }; 
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

  function recoGenres(genres){
    axios.get(`http://localhost:5000/recommendations/${genres}`).then(response => {
    setReco(response.data.tracks); 
    setSelected(genres)
  });
}


  console.log(Recommendations)

  return (
    <div className='cards'>
      <h1>Recommended for you</h1>
      <li 
      className='reco-nav-item'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
        <Link 
        className='reco-nav-links'
        >
          Genres  <i className='fas fa-caret-down'/>
        </Link>
        {dropdown && <RecoDropdown/>}      
        </li>
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
