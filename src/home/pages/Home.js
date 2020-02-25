import React, { useState, useEffect } from 'react';
import ip from '../../shared/ip/Ip';

import Search from './blocks/Search';
import Explain from './blocks/Explain';
import Last from './blocks/Last';
import Quotations from './blocks/Quotations';
import NextEvents from './blocks/NextEvents';
import Help from './blocks/Help';

import './Home.css';

const Home = () => {
  const [moovs, setMoovs] = useState([]);


  useEffect(() => {
    const getMoovsList = async () => {
      try {
        const response = await fetch(`${ip}/moovs/`);
        const data = await response.json();
        return setMoovs(data);
      }
      catch (error) {
        return console.log(error);
      }
    };
    getMoovsList();
  }, []);

  return (
    <>
      <p>hello</p>
      <Explain />
      <Last last={moovs} />
      <Quotations />
      <NextEvents nextEvents={moovs} />
      <Help />
    </>
  );
};

export default Home;
