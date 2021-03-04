import React, {useState, useEffect} from 'react';
import ArtistComponent from "./components/artist_comp";
import axios from 'axios'

function App() {
  const [artists, setArtists] = useState([])
  
  useEffect(() => {
      axios
        .get("http://localhost:5000/artists")
        .then(res => {
            console.log(res.data.items)
            setArtists(res.data.items)
          }
        )
  }, [])

  return (
    <div className="App">
      <header className="bg-green-500 text-4xl font-bold text-align: right p-2 mb-12">
        Top Artists
      </header>
      {
        artists.length === 0 ? (
          <p>Fetching your artists!</p>
        ) : (
          artists.map(artist => (
            <ArtistComponent artist={artist} key={artist}/>
          ))
        )
      }
    </div>
  );
}

export default App;