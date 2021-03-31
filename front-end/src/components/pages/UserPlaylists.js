import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
import Footer from '../Footer';
import Playlists from '../ShowPlaylists'

function ShowPlaylists() {
  return (
    <>
      <NavBar />
      <Playlists />
      <Footer />
    </>
  );
}

export default ShowPlaylists;