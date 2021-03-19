import React, {useState, useEffect} from 'react';
import './Artists.css';
import TrackItem from './TrackItem';
import axios from 'axios'

function Tracks() {
  const [tracks, setTracks] = useState([])
  const [selected, setSelected] = useState([])
  let ranges = [{'key':'short_term', 'value':'Last Month'}, {'key':'medium_term', 'value':'Last 6 Months'}, {'key':'long_term', 'value':'All Time'}]
  let count = 1;
  useEffect(() => {
    axios.get('http://localhost:5000/tracks').then(response => {
      setTracks(response.data.items);
      console.log(response.data.items);
      setSelected('medium_term')
    });
  }, [])

  function getTracksByTimeRange(range) {
    axios
        .get("http://localhost:5000/tracks/" + range)
        .then(res => {
            setTracks(res.data.items);
            setSelected(range)
          }
        )
  }



  return (
    <div className='cards'>
      <h1>Top Tracks</h1>
      <div className='btn__container'>
        <div className='btn__wrapper'>
          <ul className='btn__items'>
            {ranges.map(range => 
              <li className='cards__item'>
                <div className='cards__item__link'>
                  <button className={range.key === selected ? 'btn-selected btn btn--primary btn--large' : 'btn-unselected btn btn--primary btn--large'} onClick={() => getTracksByTimeRange(range.key)}>{range.value}</button>
                </div>
              </li>
            )}
          </ul> 
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              tracks.map(track => (
              <TrackItem
                src={track.album.images[0].url}
                text={track.name}
                popularity={track.popularity}
                duration={track.duration_ms}
                label={count++}
                path={track.external_urls.spotify}
                artists={track.artists}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tracks;
