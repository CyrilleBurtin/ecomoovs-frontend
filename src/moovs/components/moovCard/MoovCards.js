import React from 'react';
import './MoovCards.css';
import BlueButton from '../../../shared/uiElements/BlueButton';

const MoovsCards = props => {

  return (
    <div className='MoovCardFlex'>
      {props.moovList.map((e, i) => (
        <div
          key={i + 1}
          className='MoovCards'          
        >
            <div style={{height: '150px', overflow:'hidden'}}>
              <img src={e.img.eager[0].secure_url} style={{width:'100%', maxHeight:'150px'}} alt="moov"/>
            </div> 
            <div className='CardBody'>
                <div>
                  {i + 1}. {e.name}
                </div>
                <div>{e.description}</div>
                <div>{e.location.city}</div>
                <div></div>
                <div>{e.type}</div>
            </div>
            <div style={{textAlign:'center'}}>
              <BlueButton>Voir +</BlueButton>
            </div>
        </div>
      ))}
    </div>
  );
};

export default MoovsCards;
