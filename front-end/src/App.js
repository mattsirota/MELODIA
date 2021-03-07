import React from 'react';
import LoginNavbar from './components/LoginNavbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <LoginNavbar />
        <Switch>
          <Route path='/' exact component={Login} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
