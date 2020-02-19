import React from 'react';
import './blocks.css';

const Quotation = props => (
  <div className='quotation'>
    <div className='text'>
      <p>
        Mieux vaut prendre le changement par la main avant qu'il ne nous prenne
        par la gorge.
      </p>
      <p>Winston Churchill</p>
    </div>
    <div className='text'>
      <p>
        Chacun de nous peut apporter des changements dans la façon dont nous
        vivons nos vies et faire partie de la solution [au changement
        climatique].
      </p>
      <p>Al Gore</p>
    </div>
  </div>
);

export default Quotation;
