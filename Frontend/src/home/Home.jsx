// import React from 'react'

import Banner from "../components/Banner";
// import Contact from "../components/contact";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      {/* <Contact/> */}
    </>
  );
}

export default Home;
