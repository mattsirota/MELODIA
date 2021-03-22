import React from 'react';

function ArtistItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <a href={props.path} target="_blank">
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </a>
          <div className='cards__item__info'>
            <h5 className='cards__item__text1'>Popularity: {props.popularity}</h5>
            <h5 className='cards__item__text1'>Followers: {props.followers.toLocaleString()}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default ArtistItem;
