import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import AboutUs_home from './components/pages/AboutUs_home';
import Playlist from './components/pages/Playlist';
import PlaylistTracks from './components/pages/PlaylistTracks';
import Recents from './components/pages/Recents';
import Tracks from './components/pages/Tracks';
import UserPlaylists from './components/pages/UserPlaylists';
import Recommendations from './components/pages/Recommendations';
import PlaylistReco from './components/pages/PlaylistReco';
import PlaylistRecents from './components/pages/PlaylistRecents';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/aboutus' exact component={AboutUs} />
          <Route path='/aboutus_home' exact component={AboutUs_home} />
          <Route path='/playlist' exact component={Playlist} />
          <Route path='/recents' exact component={Recents} />
          <Route path='/tracks' exact component={Tracks} />
          <Route path='/showplaylists' exact component={UserPlaylists} />
          <Route path='/recommendations' exact component={Recommendations} />
          <Route path='/recenttracks' exact component={Recents} />
        </Switch>
      </Router>

    </>
  );
}

export default App;