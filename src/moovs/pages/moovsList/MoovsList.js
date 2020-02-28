import React, { useState, useEffect } from 'react';
import ip from '../../../shared/ip/Ip';
import MoovsCards from '../../components/moovCard/MoovCards';
import './MoovList.css';

const MoovsList = () => {
  const [moovs, setMoovs] = useState([]);

  useEffect(() => {

    const abortController = new AbortController();

    const moovList = async () => {
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
    moovList();
    return () => {
      abortController.abort();
    };
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
