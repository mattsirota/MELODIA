import React from 'react';

function TimeRangeButtonItem(props) {
  return (
    <>
    <li className='cards__item'>
        <div className='cards__item__link'>
        <button className={props.key === selected ? 'btn-selected btn btn--primary btn--large' : 'btn btn--primary btn--large'} onClick={() => getArtistsByTimeRange(props.key)}>props.key</button>
        </div>
    </li>
    </>
  );
}

export default TimeRangeButtonItem;