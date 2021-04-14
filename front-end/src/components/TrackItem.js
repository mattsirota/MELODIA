import React from 'react';

function timeConversion(timeInMiliseconds) {
  let h,m,s;
  h = Math.floor(timeInMiliseconds/1000/60/60);
  m = Math.floor((timeInMiliseconds/1000/60/60 - h)*60);
  s = Math.floor(((timeInMiliseconds/1000/60/60 - h)*60 - m)*60);

  s < 10 ? s = `0${s}`: s = `${s}`
  m < 10 ? m = `0${m}`: m = `${m}`
  h < 10 ? h = `0${h}`: h = `${h}`

  return `${m}:${s}`
}

function TrackItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <a href={props.path}  style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
              <a href={props.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <h5 className='cards__item__text'>{props.artists[0].name}</h5>
              </a>
            </div>
          </a>
          <div className='cards__item__info'>
            <h5 className='cards__item__text1'>Popularity: {props.popularity}</h5>
            <h5 className='cards__item__text1'>Duration: {timeConversion(props.duration)}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default TrackItem;
