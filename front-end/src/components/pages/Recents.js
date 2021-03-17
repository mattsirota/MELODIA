import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
import Footer from '../Footer';
import Recents from '../RecentTracks'

function Recent() {
  return (
    <>
      <NavBar />
      <Recents />
      <Footer />
    </>
  );
}

export default Recent;
