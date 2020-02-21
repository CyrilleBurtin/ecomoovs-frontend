import React, { useState, useEffect } from 'react';
import EventsPage from '../components/EventsPage';
import ip from '../../shared/ip/Ip';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventlist = async () => {
      try {
        const response = await fetch(`${ip}/event`);
        const data = await response.json();
        console.log('data', data);
        return setEvents(data);
      } catch (error) {
        return console.log(error);
      }
    };
    eventlist();
  }, []);

  const eventsList = events.map((e,i) => <EventsPage key={i} data={e} />)

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: '#eee', textAlign: 'center' }}>
          Liste des évènements
        </h1>
      </div>
      {eventsList}
    </>
  );
};
export default EventsList;