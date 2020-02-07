import React from 'react';
import BlueButton from '../../../shared/uiElements/BlueButton';

const MoovsList = props => {
  return (
    <div style={{ width: '50%', margin: '10px auto' }}>
      {props.moovList.map((e, i) => (
        <div
          style={{
            display: 'flex',
            justifyItems: 'middle',
            justifyContent: 'center',
            marginTop: '5px',
            height: '30px',
            lineHeight: '30px'
          }}
          key={i}
        >
          <div style={{ display: 'flex', width: '90%', flexFlow: 'row wrap'  }}>
            <p style={{ width: '15%', minWidth:'150px' }}>12 déc 2020</p>{' '}
            <p style={{ width: '15%', minWidth:'150px' }}>{e.name}</p>{' '}
            <p style={{ width: '20%', minWidth:'150px' }}>{e.location.city}</p>{' '}
            <p style={{ width: '25%', minWidth:'150px' }}>{e.title}</p>
            <p style={{ width: '25%', minWidth:'150px' }}>{e.punchline}</p>
          </div>
          <BlueButton click={() => {}}>Voir +</BlueButton>
        </div>
      ))}
    </div>
  );
};

export default MoovsList;
