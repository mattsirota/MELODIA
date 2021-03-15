import React from 'react';
import '../../App.css';
import NavBar from '../Navbar';
import Footer from '../Footer';
import TracksPage from '../Tracks';

function Tracks() {
  return (
    <>
      <NavBar />
      <TracksPage />
      <Footer />
    </>
  );
}

export default Tracks;