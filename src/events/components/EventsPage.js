import React from 'react';

const EventsPage = props => {
  let event = props.data;
  console.log('event', event);

  return (
    <div className='newsCards'>
      <div>
        <div>{event.name}</div>
        <div>{event.dateIn}</div>
        <div>{event.dateOut}</div>
      </div>
      <div>{event.title}</div>
     <div className='cardContent'>
      <div>{event.punchline}</div>
      <div className='description'>{event.description}</div>
      <div>{event.email}</div>
      <div>{event.phone}</div>
      <div className='address'>
      <div>{event.zipcode}</div>
      <div>{event.city}</div>
      <div>{event.country}</div>
      </div>
      </div>
    </div>
  );
};

export default EventsPage;
