import React, { useState, useEffect } from 'react';
import EventsPage from '../components/EventsPage';
import ip from '../../shared/ip/Ip';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    const abortController = new AbortController();

    const eventlist = async () => {
      try {
        const response = await fetch(`${ip}/event`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        if (!abortController.signal.aborted) {
        console.log(error);
        }
      }
    };
    eventlist();

     return () => {
      abortController.abort();
    };

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
