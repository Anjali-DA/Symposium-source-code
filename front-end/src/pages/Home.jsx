import React, { Fragment } from 'react';
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import Content from '../components/Content';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Content />
    </Fragment>
  );
};

export default Home;
