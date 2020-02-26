import React from 'react';

import Search from './blocks/Search';
import Explain from './blocks/Explain';
import LastMoovs from './blocks/LastMoovs';
import Quotations from './blocks/Quotations';
import NextEvents from './blocks/NextEvents';
import Help from './blocks/Help';

import './Home.css';

const Home = () => {
  return (
    <>
      <Search />
      <Explain />
      <LastMoovs />
      <Quotations />
      <NextEvents />
      <Help />
    </>
  );
};

export default Home;
