import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
import Footer from '../Footer';
import Recommendations from '../Recommendations'

function Recommendation() {
  return (
    <>
      <NavBar />
      <Recommendations />
      <Footer />
    </>
  );
}

export default Recommendation;
