import React, {useState, useEffect} from 'react';
import './Artists.css';
import TrackItem from './TrackItem';
import axios from 'axios'
import { Button, playlistButtonRecent } from './Button';
import { Link } from 'react-router-dom';


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
      <br />
      <h1><Link to='/playlistrecent'> <Button buttonStyle='cards__item__link'> Create Your Playlist </Button></Link></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              items === 0 ? (
                <p>Fetching your recent tracks!</p>
              ) : (
                  items.map(items => (
                    <TrackItem
                      src={items.track.album.images[0].url}
                      text={items.track.name}
                      popularity={items.track.popularity}
                      duration={items.track.duration_ms}
                      label={count++}
                      path={items.track.external_urls.spotify}
                      artists={items.track.artists}
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
