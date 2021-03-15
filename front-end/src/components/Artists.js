import React, {useState, useEffect} from 'react';
import './Artists.css';
import Artisttem from './ArtistItem';
import axios from 'axios'

function Artists() {
  const [artists, setArtists] = useState([])
  const [selected, setSelected] = useState([])
  let ranges = [{'key':'short_term', 'value':'Last Month'}, {'key':'medium_term', 'value':'Last 6 Months'}, {'key':'long_term', 'value':'All Time'}]
  let count = 1;
  useEffect(() => {
    axios.get('http://localhost:5000/artists').then(response => {
      setArtists(response.data.items);
      setSelected('medium_term')
    });
  }, [])

  function getArtistsByTimeRange(range) {
    axios
        .get("http://localhost:5000/artists/" + range)
        .then(res => {
            setArtists(res.data.items);
            setSelected(range)
          }
        )
  }

  return (
    <div className='cards'>
      <h1>Top Artists</h1>
      <div className='btn__container'>
        <div className='btn__wrapper'>
          <ul className='btn__items'>
            {ranges.map(range => 
              <li className='cards__item'>
                <div className='cards__item__link'>
                  <button className={range.key === selected ? 'btn-selected btn btn--primary btn--large' : 'btn-unselected btn btn--primary btn--large'} onClick={() => getArtistsByTimeRange(range.key)}>{range.value}</button>
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
}

export default Artists;
