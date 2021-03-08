import React from 'react';
import '../../App.css';
import Artists from '../Artists';
import HomeSection from '../HomeSection';
import Footer from '../Footer';
import NavBar from '../Navbar';

function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <Artists />
      <Footer />
    </>
  );
}

export default Home;
