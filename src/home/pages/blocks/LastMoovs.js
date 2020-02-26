import React, { useState, useEffect } from 'react';
import MoovCards from '../../../moovs/components/moovCard/MoovCards';
import GreenButton from '../../../shared/uiElements/GreenButton';
import './blocks.css';
import ip from '../../../shared/ip/Ip';

const LastMoovs = () => {
  const [moovs, setMoovs] = useState([]);

  useEffect(() => {
    const getMoovsList = async () => {
      try {
        const response = await fetch(`${ip}/moovs/`);
        const data = await response.json();
        return setMoovs(data);
      } catch (error) {
        return console.log(error);
      }
    };
    getMoovsList();
  }, []);

  return (
    <div className='last'>
      <p className='title'>Les dernières initiatives</p>
      <div className='cards'>
        <MoovCards moovList={moovs} />
      </div>
      <div className='button'>
        <GreenButton>En voir plus</GreenButton>
      </div>
    </div>
  );
};

export default LastMoovs;
