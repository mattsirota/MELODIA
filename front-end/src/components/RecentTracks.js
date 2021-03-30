import React, {useState, useEffect} from 'react';
import './Artists.css';
import TrackItem from './TrackItem';
import axios from 'axios'
import { Button, playlistButtonRecent } from './Button';
import { Link } from 'react-router-dom';
import Popup from './Popup'


function Recents() {
  const [items, setRecents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  let count = 1;
  useEffect(() => {
    axios.get('http://localhost:5000/recents').then(response => {
      setRecents(response.data.items);
      console.log(response.data.items)
    });
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='cards'>
      <h1>Recent Tracks</h1>
      <br />
      <div className='btn__container'>
        <div className='btn__wrapper'>
          <ul className='btn__items'>
            <div>
                <input
                  type="button"
                  value="Create Your Playlist"
                  onClick={togglePopup}
                  className='cards__item__link btn-unselected btn btn--primary btn--large'
                />
                {isOpen && <Popup
                  handleClose={togglePopup}
                  theList={items}
                  type="Recents"
                />}
            </div>
          </ul>
        </div>
      </div>
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
