import React from 'react';

import { NavLink } from 'react-router-dom';
import './MoovCards.css';
import BlueButton from '../../../shared/uiElements/BlueButton';

const MoovsCards = (props) => {
  console.log('props.moovList', props.moovList);
  return (
    <div className='MoovCardFlex'>
      {props.moovList &&
        props.moovList.map((e, i) => (
          <div key={i + 1} className='MoovCards'>
            <div>
              <img src={e.img.eager[0].secure_url} alt='moov' />
            </div>
            <div className='CardBody'>
              <div className='name'>{e.name}</div>
              <div className='geoType'>
                <div className='city'>{e.location.city}&nbsp;&nbsp;&nbsp;</div>
                <div className='type'>{e.type}</div>
              </div>
              <div className='description'>{e.description}</div>

              <div className='tagsHolder'>
                {e.tags.map((e) => (
                  <div className='tags'>{e}</div>
                ))}
              </div>
            </div>

            <div className='seeMore'>
              <NavLink
                to={{ pathname: '/moov', moovData: e }}
                activeClassName='active'
              >
                <BlueButton>Voir +</BlueButton>
              </NavLink>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MoovsCards;
