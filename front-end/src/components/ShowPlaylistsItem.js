import React from 'react';

function ShowPlaylistsItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <a href={props.path} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
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
        </div>
      </li>
    </>
  );
}

export default ShowPlaylistsItem;
