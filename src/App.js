import React, {useState, useEffect} from 'react';
import ArtistComponent from "./components/artist_comp";
import Artists from "./Artists.json"

console.log(Artists)


function App() {
  const[Artist, setArtist] = useState([])

  useEffect(() => setArtist(Artists), []);


  return (
    <div className="App">
      <header className="bg-green-500 text-4xl font-bold text-align: right p-2 mb-12">
        Top Artists
      </header>
      {
        Artist.length === 0 ? (
          <p>Fetching your artists!</p>
        ) : (
          Artist.map(artist => (
            <ArtistComponent artist={artist} key={artist}/>
          ))
        )
      }
    </div>
  );
}

export default App;
