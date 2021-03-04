import React from 'react';



const ArtistComponent = ({artist}) => (
    <div className='flex bg-white shadow-md m-4 p-4 rounded'>
        <div>
            <img src= {artist.images[0].url} alt={artist.name}>
                </img>
        </div>
        <div className='flex flex-col  ml-4'>
            <h3 className ='font-bold text-xl text-green-500'>{artist.name}</h3>
            <p className="text-gray-400">
                Popularity: {artist.popularity}
            </p>
        </div>
        <div className='flex items-center ml-auto'>
            {artist.genres ? artist.genres.map((genre) => <span className='text-white bg-gray-500 font-bold m-2 p-2 rounded'>
            {genre}</span>) : ' '}
            
        </div>
        
    </div>
    
)

export default ArtistComponent;