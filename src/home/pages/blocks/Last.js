import React from 'react';
import MoovCards from '../../../moovs/components/moovCard/MoovCards';
import GreenButton from '../../../shared/uiElements/GreenButton';
import './blocks.css';

const Last = props => (
  <div className='last'>
    <p className='title'>
      Les dernières initiatives
    </p>
    <div className='cards'>
      <MoovCards moovList={props.last} />
    </div>
    <div className="button">
      <GreenButton>En voir plus</GreenButton>
    </div>
  </div>
);

export default Last;
