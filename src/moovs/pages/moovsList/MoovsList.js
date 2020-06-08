import React, { useState, useEffect } from 'react';
import ip from '../../../shared/ip/Ip';
import MoovsCards from '../../components/moovCard/MoovCards';
import './MoovList.css';

const MoovsList = () => {
  const [moovs, setMoovs] = useState([]);

  useEffect(() => {
    const moovList = async () => {
      try {
        const response = await fetch(`${ip}/moovs/`);
        const data = await response.json();
        setMoovs(data);
      } catch (error) {
        console.log(error);
      }
    };
    moovList();
  }, []);

  return (
    <div className='Moovs'>
      <div className='MoovsHeader'>
        <p className='text-center MoovsTitle'>Nouveaux Moovs</p>
      </div>
      <div className='MoovList'>
        <MoovsCards moovList={moovs} />
      </div>
    </div>
  );
};

export default MoovsList;
