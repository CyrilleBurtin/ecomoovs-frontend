import React from 'react';
import GreenButton from '../../../shared/uiElements/GreenButton';

const Help = () => (

      <div  className='help'>
        
        <p
          className='align-middle font-weight-bold'
          style={{ fontSize: 45, flex: 1 }}
        >
          Nous soutenir
        </p>
        <p
          className='align-middle font-weight-bold'
          style={{ fontSize: 28, flex: 1 }}
        >
          Soumettre une idée, faire un don ou nous contacter ?
        </p>
        <GreenButton>C'est par ici</GreenButton>
        
      </div>        

);

export default Help;
