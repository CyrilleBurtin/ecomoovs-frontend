import React, { useState, useEffect } from 'react';
import MoovCards from '../../../moovs/components/moovCard/MoovCards';
import GreenButton from '../../../shared/uiElements/GreenButton';
import './blocks.css';
import ip from '../../../shared/ip/Ip';

const LastMoovs = () => {
  const [moovs, setMoovs] = useState([]);


  useEffect(() => {

    const abortController = new AbortController();

    const getMoovsList = async () => {
      try {
        const response = await fetch(`${ip}/moovs/`, { signal: abortController.signal });
        const data = await response.json();
        setMoovs(data);

      } catch (error) {
        if (!abortController.signal.aborted) {
        console.log(error);
        }
      }
    };

    getMoovsList();

    return () => {
      abortController.abort();
    };
    
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
