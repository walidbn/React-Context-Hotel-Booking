import React from 'react';
import Hero from '../components/Hero';
import Banner from'../components/Banner';
import Services from "../components/Services";
import {Link} from 'react-router-dom';
import FeauturedRooms from'../components/FeauturedRooms';
function  Home  () {
    return (
        <>
      <Hero>
          <Banner title="Luxurious rooms" subtitle="Tunisian deluxe rooms starting at $30">
            <Link to="/rooms" className="btn-primary" >our rooms</Link>
          </Banner>
      </Hero>
      <Services/>
      <FeauturedRooms/>
    </>
    )
}
export default Home;