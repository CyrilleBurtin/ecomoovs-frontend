import React, { useState, useEffect } from 'react';
import ip from '../../shared/ip/Ip';
import './nextEventsList.css';
import { NavLink } from 'react-router-dom';
import BlueButton from '../../shared/uiElements/BlueButton';

const EventsList = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventlist = async () => {
      try {
        const response = await fetch(`${ip}/event`);
        const data = await response.json();
        console.log('data', data);
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    eventlist();
  }, []);
  console.log('events', events);
  return (
    <>
      <div className='nextEventsList'>
        <div className='container'>
          <p style={{ width: '15%', fontWeight: 'bold' }}>Dates</p>
          <p style={{ width: '15%', fontWeight: 'bold' }}>Nom</p>
          <p style={{ width: '15%', fontWeight: 'bold' }}>Ville</p>
          <p style={{ width: '20%', fontWeight: 'bold' }}>Punchline</p>
          <div style={{ width: '5%', minWidth: '60px' }}></div>
        </div>

        {events.map((e, i) => (
          <div className='container' key={i}>
            <p style={{ width: '15%' }}>
              du {e.dateIn}
              <br /> au {e.dateOut}
            </p>
            <p style={{ width: '15%' }}>{e.name}</p>
            <p style={{ width: '15%' }}>{e.city}</p>
            <p style={{ width: '20%' }}>{e.punchline}</p>
            <div style={{ width: '5%', minWidth: '60px' }}>
            <NavLink to={{pathname: '/event', eventData: e}} activeClassName='active'>
                <BlueButton>Voir +</BlueButton>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default EventsList;
