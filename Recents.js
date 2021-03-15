import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
import Footer from '../Footer';
import Recents from '../RecentTracks'

function Recent() {
  return (
    <>
      <NavBar />
      <h1 className='recents'>Here goes recent Tracks!</h1>;
      <Recents/>
      <Footer/>    
    </>
  );
}

export default Recent;