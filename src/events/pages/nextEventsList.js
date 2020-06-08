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
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };

    eventlist();
  }, []);

  return (
    <>
      <div className='nextEventsList'>
        {events.map((e, i) => (
          <div className='container' key={i}>
            <p>{e.name}</p>
            <p>
              du {e.dateIn}
              <br /> au {e.dateOut}
            </p>
            <p>{e.city}</p>
            <p>{e.punchline}</p>
            <p>
              <NavLink
                to={{ pathname: '/event', eventData: e }}
                activeClassName='active'
              >
                <BlueButton>Voir +</BlueButton>
              </NavLink>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventsList;
