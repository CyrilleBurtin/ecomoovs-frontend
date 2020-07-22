import React, { useState, useEffect } from 'react';
import MoovsCards from '../../components/moovCard/MoovCards';
import './MoovList.css';
import useFetch from '../../../hooks/useFetch';
const MoovsList = () => {
  const [moovs, setMoovs] = useState();

  const res = useFetch('moovs');

  useEffect(()=> {
    if (res.response) {
      setMoovs(res.response);
    }
  },[res])

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
