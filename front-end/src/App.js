import React from 'react';
import './App.css';
import Spotify from './Spotify';
import Artists from './Artists';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Spotify}/>
          <Route path="/artists" component={Artists}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
