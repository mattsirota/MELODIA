import React from 'react';
import LoginNavbar from './components/LoginNavbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Playlist from './components/pages/Playlist';
import Recents from './components/pages/Recents';
import Tracks from './components/pages/Tracks';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/aboutus' exact component={AboutUs} />
          <Route path='/playlist' exact component={Playlist} />
          <Route path='/recents' exact component={Recents} />
          <Route path='/tracks' exact component={Tracks} />

        </Switch>
      </Router>

    </>
  );
}

export default App;
