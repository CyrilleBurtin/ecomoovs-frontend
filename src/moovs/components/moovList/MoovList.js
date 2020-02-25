import React from 'react';
import BlueButton from '../../../shared/uiElements/BlueButton';
import { NavLink } from 'react-router-dom';

const MoovsList = props => {
  return (
    <div style={{ width: '90%', margin: '10px auto' }}>

      {props.moovList.map((e, i) => (

        <div style={{ display: 'flex' }} key={i} >
          <div style={{ display: 'flex', width: '90%', justifyContent: 'space-around', flexFlow: 'row wrap', borderBottom: '1px solid #ddd', marginBottom: '5px'  }}>
            <p style={{ width: '15%', minWidth:'150px', margin: '5px 0'}}>12 déc 2020</p>
            <p style={{ width: '15%', minWidth:'150px', margin: '5px 0'}}>{e.name}</p>
            <p style={{ width: '15%', minWidth:'150px', margin: '5px 0'}}>{e.location.city}</p>
            <p style={{ width: '20%', minWidth:'150px', margin: '5px 0'}}>{e.title}</p>
            <div style={{width: '5%', minWidth: '60px'}}>
            <NavLink to={{pathname: '/moov', moovData: e}} activeClassName='active'>
                <BlueButton>Voir +</BlueButton>
              </NavLink>
            </div>
          </div>
        </div>

      ))}

  </div>
  );
};

export default MoovsList;
